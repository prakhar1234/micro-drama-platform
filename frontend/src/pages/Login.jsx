import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="brand-icon brand-icon-lg">M</span>
          <h1>{isRegister ? 'Create Account' : 'Welcome Back'}</h1>
          <p className="login-subtitle">
            {isRegister ? 'Join the community of bold storytelling.' : 'Sign in to continue watching.'}
          </p>
        </div>

        <form className="login-form" onSubmit={e => e.preventDefault()}>
          {isRegister && (
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Choose a username" required />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          {isRegister && (
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>I confirm I am 18 years or older</span>
            </label>
          )}
          <button type="submit" className="btn btn-primary btn-full">
            {isRegister ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          <button className="btn-text" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Already have an account? Sign in' : "New here? Create an account"}
          </button>
          <Link to="/" className="btn-text">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
