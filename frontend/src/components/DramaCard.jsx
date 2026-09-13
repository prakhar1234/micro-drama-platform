import { Link } from 'react-router-dom';

function DramaCard({ drama }) {
  return (
    <Link to={`/drama/${drama.id}`} className="drama-card">
      <div className="card-image" style={{ background: drama.gradient }}>
        {drama.image && (
          <img
            src={drama.image}
            alt={drama.title}
            className="card-img"
            loading="lazy"
          />
        )}
        <div className="card-overlay">
          <span className="card-rating">{drama.rating}</span>
          <span className="card-episodes">{drama.episodes} eps</span>
        </div>
        <div className="card-play">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
      <div className="card-info">
        <h3 className="card-title">{drama.title}</h3>
        <div className="card-meta">
          <span className="card-genre">{drama.genre}</span>
          <span className="card-style">{drama.style}</span>
        </div>
      </div>
    </Link>
  );
}

export default DramaCard;
