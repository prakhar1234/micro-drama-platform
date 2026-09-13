import { Link } from 'react-router-dom';
import DramaCard from '../components/DramaCard';
import { MOCK_DRAMAS } from '../data/mockData';

function Profile() {
  const user = {
    username: 'DarkFlameUser',
    email: 'user@microdrama.io',
    avatar: null,
    favoriteGenres: ['Psychological', 'Thriller', 'Isekai'],
    memberSince: 'Jan 2026',
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <span>{user.username[0]}</span>
        </div>
        <div className="profile-info">
          <h1>{user.username}</h1>
          <p className="profile-email">{user.email}</p>
          <p className="profile-since">Member since {user.memberSince}</p>
          <div className="profile-genres">
            {user.favoriteGenres.map(g => (
              <span key={g} className="meta-tag">{g}</span>
            ))}
          </div>
        </div>
        <Link to="/login" className="btn btn-outline">Edit Profile</Link>
      </div>

      {/* Watchlist */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">My Watchlist</h2>
        </div>
        <div className="drama-row">
          {MOCK_DRAMAS.slice(0, 4).map(d => (
            <DramaCard key={d.id} drama={d} />
          ))}
        </div>
      </section>

      {/* Continue Watching */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Continue Watching</h2>
        </div>
        <div className="drama-row">
          {MOCK_DRAMAS.slice(2, 5).map(d => (
            <DramaCard key={d.id} drama={d} />
          ))}
        </div>
      </section>

      {/* Watch History */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Watch History</h2>
        </div>
        <div className="drama-row">
          {MOCK_DRAMAS.slice(4, 8).map(d => (
            <DramaCard key={d.id} drama={d} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
