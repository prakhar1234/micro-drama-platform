import { useState } from 'react';
import DramaCard from '../components/DramaCard';
import { MOCK_DRAMAS, GENRES } from '../data/mockData';

const STYLES = ['All', 'Anime', 'Live-Action', 'Animated', 'Mixed-Media'];

function Browse() {
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeStyle, setActiveStyle] = useState('All');

  const filtered = MOCK_DRAMAS.filter(d => {
    const genreMatch = activeGenre === 'All' || d.genre === activeGenre;
    const styleMatch = activeStyle === 'All' || d.style === activeStyle;
    return genreMatch && styleMatch;
  });

  return (
    <div className="browse-page">
      <div className="browse-header">
        <h1>Browse Dramas</h1>
        <p className="browse-subtitle">{filtered.length} titles available</p>
      </div>

      <div className="filter-bar">
        <div className="filter-group">
          <label className="filter-label">Genre</label>
          <div className="filter-chips">
            <button
              className={`chip ${activeGenre === 'All' ? 'chip-active' : ''}`}
              onClick={() => setActiveGenre('All')}
            >All</button>
            {GENRES.map(g => (
              <button
                key={g}
                className={`chip ${activeGenre === g ? 'chip-active' : ''}`}
                onClick={() => setActiveGenre(g)}
              >{g}</button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <label className="filter-label">Style</label>
          <div className="filter-chips">
            {STYLES.map(s => (
              <button
                key={s}
                className={`chip ${activeStyle === s ? 'chip-active' : ''}`}
                onClick={() => setActiveStyle(s)}
              >{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="drama-grid">
        {filtered.length > 0 ? (
          filtered.map(drama => <DramaCard key={drama.id} drama={drama} />)
        ) : (
          <div className="empty-state">
            <p>No dramas match your filters.</p>
            <button className="btn btn-outline" onClick={() => { setActiveGenre('All'); setActiveStyle('All'); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Browse;
