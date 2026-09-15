const API_BASE = 'https://api.dev.runwayml.com/v1';

class RunwayClient {
  constructor() {
    this.apiKey = process.env.RUNWAYML_API_SECRET;
  }

  async generateVideo({ prompt, duration = 5 }) {
    const res = await fetch(`${API_BASE}/image_to_video`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'X-Runway-Version': '2024-11-06',
      },
      body: JSON.stringify({
        model: 'gen4_turbo',
        promptText: prompt,
        duration,
        ratio: '16:9',
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Runway API error: ${res.status}`);
    }

    return res.json();
  }

  async getTaskStatus(taskId) {
    const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'X-Runway-Version': '2024-11-06',
      },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Runway API error: ${res.status}`);
    }

    const data = await res.json();
    return {
      status: data.status,
      output: data.output,
      progress: data.progress,
      failure: data.failure,
    };
  }
}

module.exports = new RunwayClient();
