import { useParams, Link, useSearchParams } from 'react-router-dom';
import { MOCK_DRAMAS, MOCK_EPISODES } from '../data/mockData';

function Player() {
  const { episodeId } = useParams();
  const [searchParams] = useSearchParams();

  const videoUrl = searchParams.get('videoUrl');
  const genTitle = searchParams.get('title');
  const genDrama = searchParams.get('drama');

  // AI-generated video mode
  if (videoUrl) {
    return (
      <div className="player-page player-page-generated">
        <div className="video-wrapper">
          <video
            className="gen-video"
            src={videoUrl}
            controls
            autoPlay
          />
        </div>
        <div className="player-info">
          <div className="player-details">
            <p className="player-drama-title">{genDrama || 'AI Generated'}</p>
            <h2>{genTitle || 'Generated Episode'}</h2>
            <div className="player-meta">
              <span className="gen-badge">AI Generated</span>
              <span>Runway Gen-4</span>
            </div>
            <div className="player-actions">
              <button className="btn btn-outline btn-sm">Like</button>
              <button className="btn btn-outline btn-sm">Share</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard mock episode mode
  const epIndex = MOCK_EPISODES.findIndex(e => e.id === episodeId);
  const episode = MOCK_EPISODES[epIndex] || MOCK_EPISODES[0];
  const drama = MOCK_DRAMAS[0];
  const nextEp = MOCK_EPISODES[epIndex + 1];

  return (
    <div className="player-page">
      {/* Video Area */}
      <div className="video-wrapper">
        <div className="video-placeholder" style={{ background: drama.gradient }}>
          <div className="video-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="white" opacity="0.9"><polygon points="5,3 19,12 5,21" /></svg>
            <p>Video Player</p>
          </div>
          <div className="video-controls">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '35%' }}></div>
            </div>
            <div className="controls-row">
              <span>3:12 / {episode.duration}</span>
              <div className="control-buttons">
                <button className="control-btn">10s</button>
                <button className="control-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                </button>
                <button className="control-btn">10s</button>
              </div>
              <span>HD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="player-info">
        <div className="player-details">
          <p className="player-drama-title">{drama.title}</p>
          <h2>Episode {episode.number}: {episode.title}</h2>
          <div className="player-meta">
            <span>{episode.duration}</span>
            <span>{episode.views} views</span>
          </div>
          <div className="player-actions">
            <button className="btn btn-outline btn-sm">Like</button>
            <button className="btn btn-outline btn-sm">+ My List</button>
            <button className="btn btn-outline btn-sm">Share</button>
          </div>
        </div>

        {nextEp && (
          <Link to={`/watch/${nextEp.id}`} className="next-episode">
            <span className="next-label">Next Episode</span>
            <span className="next-title">Ep {nextEp.number}: {nextEp.title}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
          </Link>
        )}
      </div>

      {/* Episode list sidebar */}
      <div className="player-episodes">
        <h3>All Episodes</h3>
        {MOCK_EPISODES.map(ep => (
          <Link
            to={`/watch/${ep.id}`}
            key={ep.id}
            className={`player-ep-item ${ep.id === episodeId ? 'active' : ''}`}
          >
            <span className="ep-num">{ep.number}</span>
            <div>
              <p className="ep-item-title">{ep.title}</p>
              <span className="ep-item-dur">{ep.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Player;
