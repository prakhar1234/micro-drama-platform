import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_DRAMAS, MOCK_EPISODES } from '../data/mockData';
import { api } from '../services/api';

function DramaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const drama = MOCK_DRAMAS.find(d => d.id === id) || MOCK_DRAMAS[0];

  const [showGenModal, setShowGenModal] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [genJob, setGenJob] = useState(null);
  const [genError, setGenError] = useState('');

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setGenError('');
    try {
      const job = await api.startGeneration({
        prompt: prompt.trim(),
        dramaId: id,
        episodeNumber: drama.episodes + 1,
        duration: 5,
      });
      setGenJob(job);
      setShowGenModal(false);
    } catch (err) {
      setGenError(err.message);
    }
  }

  // Poll for generation status
  useEffect(() => {
    if (!genJob || genJob.status === 'complete' || genJob.status === 'failed') return;

    const interval = setInterval(async () => {
      try {
        const updated = await api.getGenerationStatus(genJob.id);
        setGenJob(updated);
      } catch (err) {
        setGenError(err.message);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [genJob?.id, genJob?.status]);

  return (
    <div className="detail-page">
      {/* Promo Banner */}
      {drama.promo && (
        <div className="promo-strip">
          <span className="promo-strip-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
          </span>
          <span className="promo-strip-text">{drama.promo}</span>
        </div>
      )}

      {/* Banner */}
      <div className="detail-banner" style={{ background: drama.gradient }}>
        <div className="detail-banner-overlay">
          <div className="detail-banner-content">
            <h1>{drama.title}</h1>
            <div className="detail-meta">
              <span className="meta-tag">{drama.genre}</span>
              <span className="meta-tag">{drama.style}</span>
              <span className="meta-tag">{drama.rating}</span>
              <span className="meta-tag">{drama.views} views</span>
            </div>
            <p className="detail-desc">{drama.description}</p>
            <div className="detail-stats">
              <div className="stat">
                <span className="stat-value">{drama.episodes}</span>
                <span className="stat-label">Episodes</span>
              </div>
              <div className="stat">
                <span className="stat-value">{drama.avgRating}</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-value">{drama.views}</span>
                <span className="stat-label">Views</span>
              </div>
            </div>
            <div className="detail-actions">
              <Link to={`/watch/ep1`} className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                Play Episode 1
              </Link>
              <button className="btn btn-outline">+ Add to List</button>
              <button className="btn btn-outline" onClick={() => setShowGenModal(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                AI Generate Episode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Generation status banners */}
      {genJob && (
        <div className="gen-status-area">
          {genJob.status === 'pending' && (
            <div className="gen-banner gen-banner-pending">
              <span className="gen-spinner" />
              Generation queued — waiting for Runway to start processing...
            </div>
          )}
          {genJob.status === 'processing' && (
            <div className="gen-banner gen-banner-processing">
              <span className="gen-spinner" />
              <div className="gen-progress-wrapper">
                <span>Generating video... {genJob.progress || 0}%</span>
                <div className="gen-progress-bar">
                  <div className="gen-progress-fill" style={{ width: `${genJob.progress || 0}%` }} />
                </div>
              </div>
            </div>
          )}
          {genJob.status === 'complete' && (
            <div className="gen-banner gen-banner-complete">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              Video generated successfully!
              <button
                className="btn btn-primary btn-sm"
                onClick={() => navigate(`/watch/generated?videoUrl=${encodeURIComponent(genJob.videoUrl)}&title=${encodeURIComponent(drama.title)}&drama=${encodeURIComponent(drama.title)}`)}
              >
                Watch Now
              </button>
            </div>
          )}
          {genJob.status === 'failed' && (
            <div className="gen-banner gen-banner-failed">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              Generation failed: {genJob.failure || 'Unknown error'}
              <button className="btn btn-outline btn-sm" onClick={() => { setGenJob(null); setShowGenModal(true); }}>
                Try Again
              </button>
            </div>
          )}
        </div>
      )}

      {genError && !showGenModal && (
        <div className="gen-status-area">
          <div className="gen-banner gen-banner-failed">
            {genError}
            <button className="btn btn-outline btn-sm" onClick={() => setGenError('')}>Dismiss</button>
          </div>
        </div>
      )}

      {/* Generation Modal */}
      {showGenModal && (
        <div className="gen-modal-overlay" onClick={() => setShowGenModal(false)}>
          <div className="gen-modal" onClick={e => e.stopPropagation()}>
            <h3>AI Generate Episode</h3>
            <p className="gen-modal-desc">Describe the scene you want to generate for <strong>{drama.title}</strong></p>
            <textarea
              className="gen-textarea"
              placeholder="A dramatic confrontation in a rain-soaked neon alley..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              rows={4}
            />
            {genError && <p className="gen-error">{genError}</p>}
            <div className="gen-modal-actions">
              <button className="btn btn-outline" onClick={() => { setShowGenModal(false); setGenError(''); }}>Cancel</button>
              <button className="btn btn-primary" onClick={handleGenerate} disabled={!prompt.trim()}>
                Generate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Episode List */}
      <div className="episode-section">
        <h2 className="section-title">Episodes</h2>
        <div className="episode-list">
          {MOCK_EPISODES.slice(0, drama.episodes).map(ep => (
            <Link to={`/watch/${ep.id}`} key={ep.id} className="episode-card">
              <div className="ep-thumbnail" style={{ background: drama.gradient }}>
                <span className="ep-number">{ep.number}</span>
                <svg className="ep-play" width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
              </div>
              <div className="ep-info">
                <h4 className="ep-title">Ep {ep.number}: {ep.title}</h4>
                <div className="ep-meta">
                  <span>{ep.duration}</span>
                  <span>{ep.views} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DramaDetail;
