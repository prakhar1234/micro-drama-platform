const express = require('express');
const router = express.Router();
const runway = require('../services/runway');

// In-memory job storage
const jobs = new Map();

function mapStatus(runwayStatus) {
  switch (runwayStatus) {
    case 'SUCCEEDED': return 'complete';
    case 'FAILED': return 'failed';
    case 'PENDING': return 'pending';
    case 'RUNNING': return 'processing';
    default: return 'processing';
  }
}

// POST /api/generate — start a new generation job
router.post('/', async (req, res) => {
  try {
    const { prompt, dramaId, episodeNumber, duration } = req.body;

    if (!prompt || !dramaId) {
      return res.status(400).json({ error: 'prompt and dramaId are required' });
    }

    const result = await runway.generateVideo({
      prompt,
      duration: duration || 5,
    });

    const job = {
      id: result.id,
      dramaId,
      episodeNumber: episodeNumber || 1,
      prompt,
      status: 'pending',
      progress: 0,
      videoUrl: null,
      failure: null,
      createdAt: new Date().toISOString(),
    };

    jobs.set(job.id, job);
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/generate/:jobId — check job status
router.get('/:jobId', async (req, res) => {
  try {
    const job = jobs.get(req.params.jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Return cached result for terminal states
    if (job.status === 'complete' || job.status === 'failed') {
      return res.json(job);
    }

    // Poll Runway for latest status
    const task = await runway.getTaskStatus(job.id);
    job.status = mapStatus(task.status);
    job.progress = task.progress ? Math.round(task.progress * 100) : 0;

    if (task.status === 'SUCCEEDED' && task.output) {
      job.videoUrl = Array.isArray(task.output) ? task.output[0] : task.output;
      job.status = 'complete';
      job.progress = 100;
    }

    if (task.status === 'FAILED') {
      job.failure = task.failure || 'Generation failed';
      job.status = 'failed';
    }

    jobs.set(job.id, job);
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/generate — list all jobs (debug)
router.get('/', (req, res) => {
  res.json(Array.from(jobs.values()));
});

module.exports = router;
