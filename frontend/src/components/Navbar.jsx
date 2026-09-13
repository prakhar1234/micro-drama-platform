import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="brand-icon">M</span>
        <span className="brand-text">MicroDrama</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/browse" className={isActive('/browse')}>Browse</Link>
        <Link to="/profile" className={isActive('/profile')}>My List</Link>
      </div>
      <div className="nav-actions">
        <div className="search-bar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search dramas..." />
        </div>
        <Link to="/login" className="nav-login-btn">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
