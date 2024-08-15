import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AccountSettings.css';

const AccountSettings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="account-settings-container">
      <div className="sidebar">
        <div className="logo">Ques.AI</div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/add-podcast">+ Add your Podcast(s)</Link></li>
            <li><Link to="/create-repurpose">✏️ Create & Repurpose</Link></li>
            <li><Link to="/podcast-widget">🎧 Podcast Widget</Link></li>
            <li><Link to="/upgrade">⭐ Upgrade</Link></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <Link to="/help">❓ Help</Link>
          <div className="user-info">
            <img src="/path-to-user-avatar.jpg" alt="User Avatar" className="user-avatar" />
            <div className="user-details">
              <span className="username">Username</span>
              <span className="user-email">username@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <header className="top-header">
          <div className="breadcrumb">
            <span>Home Page / Sample Project / Add your podcast</span>
          </div>
          <div className="header-icons">
            <span className="icon bell-icon">🔔</span>
            <span className="icon exit-icon">🚪</span>
          </div>
        </header>
        <div className="account-settings-content">
          <button className="back-button">Account Settings</button>
          <div className="user-info-section">
            <img src="/path-to-user-image.jpg" alt="User" className="user-avatars" />
            <div className="user-details">
              <div className="input-group">
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" value="alphauser" readOnly />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value="alphauser@gmail.com" readOnly />
              </div>
            </div>
          </div>
          <div className="subscriptions-section">
            <h2>Subscriptions</h2>
            <div className="subscription-message">
              <p>Oops! You don't have any active plans. Upgrade now!</p>
              <button className="upgrade-button">Upgrade</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;