import { Link } from 'react-router-dom';
import DramaCard from '../components/DramaCard';
import { MOCK_DRAMAS, GENRES, HERO_IMAGE, CTA_IMAGE } from '../data/mockData';

function Home() {
  const featured = MOCK_DRAMAS[2]; // Neon Requiem as featured

  return (
    <div className="home">
      {/* Hero / Featured Banner with real image */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">Featured</span>
            <h1 className="hero-title">{featured.title}</h1>
            <p className="hero-desc">{featured.description}</p>
            <div className="hero-meta">
              <span className="meta-tag">{featured.genre}</span>
              <span className="meta-tag">{featured.rating}</span>
              <span className="meta-tag">{featured.episodes} episodes</span>
              <span className="meta-tag">{featured.views} views</span>
            </div>
            <div className="hero-actions">
              <Link to={`/drama/${featured.id}`} className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                Watch Now
              </Link>
              <button className="btn btn-outline">+ My List</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Trending Now</h2>
          <Link to="/browse" className="section-link">View All</Link>
        </div>
        <div className="drama-row">
          {MOCK_DRAMAS.slice(0, 4).map(drama => (
            <DramaCard key={drama.id} drama={drama} />
          ))}
        </div>
      </section>

      {/* Genre Chips */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Browse by Genre</h2>
        </div>
        <div className="genre-grid">
          {GENRES.map(genre => (
            <Link to="/browse" key={genre} className="genre-chip">{genre}</Link>
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">New Releases</h2>
          <Link to="/browse" className="section-link">View All</Link>
        </div>
        <div className="drama-row">
          {MOCK_DRAMAS.slice(4, 8).map(drama => (
            <DramaCard key={drama.id} drama={drama} />
          ))}
        </div>
      </section>

      {/* CTA with background image */}
      <section
        className="cta-section"
        style={{
          backgroundImage: `url(${CTA_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="cta-overlay">
          <h2>Ready for your next obsession?</h2>
          <p>Join thousands of adults streaming bold, short-form anime dramas.</p>
          <Link to="/login" className="btn btn-primary btn-lg">Get Started Free</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
