import React from 'react';
import './LoginSignUp.css';

import SpotifyIcon from '../../Assets/SpotifyLogo.png';
import EmailIcon from '../../Assets/email.png';
import PasswordIcon from '../../Assets/hide.png';

export const LoginSignUp = () => {
  return (
    <div className="login-container">
      <div className="header">
        <h2>Login with Spotify</h2>
        <img src={SpotifyIcon} alt="Spotify Logo" className="logo" />
      </div>

      <form className="login-form">
        <div className="input-group">
          <label>
            <img src={EmailIcon} alt="Email Icon" className="icon" />
            <input type="email" placeholder="Enter your email" required />
          </label>
        </div>

        <div className="input-group">
          <label>
            <img src={PasswordIcon} alt="Password Icon" className="icon" />
            <input type="password" placeholder="Enter your password" required />
          </label>
        </div>

        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>

        <div className="submit-container">
          <button type="submit" className="login-btn">Login</button>
        </div>

        <div className="signup-link">
          Don't have an account? <a href="#">Sign up here</a>
        </div>
      </form>
    </div>
  );
};
