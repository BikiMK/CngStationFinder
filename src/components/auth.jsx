import React, { useState } from 'react';
import { Lock, User, Mail, LogIn } from 'lucide-react';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --primary: #1a3c34;
          --secondary: #f4f1ea;
          --accent: #d4a373;
          --text: #2d2d2d;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background-color: var(--secondary);
          color: var(--text);
        }

        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--secondary) 0%, #e4e7eb 100%);
        }

        .auth-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          max-width: 450px;
          width: 100%;
          padding: 2.5rem;
          border: 1px solid var(--accent);
        }

        .title {
          font-family: 'Playfair Display', serif;
          color: var(--primary);
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
        }

        .fuel-icon {
          width: 60px;
          height: 60px;
          background: var(--primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .form-control {
          border-radius: 8px;
          border: 1px solid var(--accent);
          font-family: 'Poppins', sans-serif;
          padding: 0.75rem;
        }

        .form-control:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(26, 60, 52, 0.1);
        }

        .btn-primary {
          background: var(--primary);
          border: none;
          border-radius: 8px;
          font-weight: 500;
          padding: 0.75rem;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #14532d;
          transform: translateY(-1px);
        }

        .btn-outline-secondary {
          border-color: var(--accent);
          color: var(--accent);
          border-radius: 8px;
          font-weight: 500;
          padding: 0.75rem;
          transition: all 0.3s ease;
        }

        .btn-outline-secondary:hover {
          background: var(--accent);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .toggle-link {
          color: var(--accent);
          cursor: pointer;
          font-weight: 500;
        }

        .toggle-link:hover {
          color: #b38b59;
          text-decoration: underline;
        }

        .input-group-text {
          background: var(--secondary);
          border: 1px solid var(--accent);
          border-radius: 8px 0 0 8px;
        }

        .form-label {
          font-weight: 500;
          color: var(--text);
        }
      `}</style>

      <div className="auth-container">
        <div className="auth-card">
          <div className="fuel-icon">
            <span className="text-white fs-3">⛽</span>
          </div>
          <h1 className="title mb-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

          {isSignIn ? (
            <div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Mail size={18} className="text-muted" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Lock size={18} className="text-muted" />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center mb-3">
                <LogIn className="me-2" size={18} />
                Sign In
              </button>
              <p className="text-center small text-muted">
                Don't have an account?{' '}
                <span className="toggle-link" onClick={toggleAuthMode}>
                  Sign Up
                </span>
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <User size={18} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Mail size={18} className="text-muted" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Lock size={18} className="text-muted" />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Create a password"
                    required
                  />
                </div>
              </div>
              <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center mb-3">
                <LogIn className="me-2" size={18} />
                Sign Up
              </button>
              <p className="text-center small text-muted">
                Already have an account?{' '}
                <span className="toggle-link" onClick={toggleAuthMode}>
                  Sign In
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;