import { useParams, Link } from 'react-router-dom';
import { MOCK_DRAMAS, MOCK_EPISODES } from '../data/mockData';

function DramaDetail() {
  const { id } = useParams();
  const drama = MOCK_DRAMAS.find(d => d.id === id) || MOCK_DRAMAS[0];

  return (
    <div className="detail-page">
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
            </div>
          </div>
        </div>
      </div>

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
