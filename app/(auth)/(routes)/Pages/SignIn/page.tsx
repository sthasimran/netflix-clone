'use client';
import React, { useState } from 'react';
import './SignIn.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing in with:', { email, password, rememberMe });
  };

  return (
    <div className="sign-in-container">

      <div className="sign-in-form-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="form-input">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or mobile number"
              required
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <div className="form-options">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
        </form>
        <div className="signup-prompt">
          <span>New to Netflix?</span> <a href="/">Sign up now.</a>
        </div>
        <div className="recaptcha-info">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#" className="learn-more">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}