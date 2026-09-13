function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="brand-icon">M</span>
          <span>MicroDrama</span>
          <p className="footer-tagline">Bold stories. Under 10 minutes.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="/browse">Browse All</a>
            <a href="/browse">Trending</a>
            <a href="/browse">New Releases</a>
          </div>
          <div className="footer-col">
            <h4>Genres</h4>
            <a href="/browse">Psychological</a>
            <a href="/browse">Romance</a>
            <a href="/browse">Thriller</a>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <a href="/profile">My List</a>
            <a href="/profile">History</a>
            <a href="/login">Sign In</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>MicroDrama &mdash; Adults-only anime & dramatic short-form content.</p>
      </div>
    </footer>
  );
}

export default Footer;
