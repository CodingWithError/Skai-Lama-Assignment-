import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './EditTranscript.css';

const EditTranscript = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const handleBack = () => {
    navigate('/add-podcast');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDiscard = () => {
    setIsEditing(false);
    
  };

  const handleSave = () => {
    setIsEditing(false);
   
  };

  const handleUserInfoClick = () => {
    navigate('/account-settings');
  };

  return (
    <div className="edit-transcript-container">
      <div className="sidebar">
        <div className="logo">
          <Link to="/">Ques.AI</Link>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/add-podcast" className="active">
                <span className="icon">+</span> Add your Podcast(s)
              </Link>
            </li>
            <li>
              <Link to="/create-repurpose">
                <span className="icon">✏️</span> Create & Repurpose
              </Link>
            </li>
            <li>
              <Link to="/podcast-widget">
                <span className="icon">🎧</span> Podcast Widget
              </Link>
            </li>
            <li>
              <Link to="/upgrade">
                <span className="icon">⭐</span> Upgrade
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <Link to="/help">
            <span className="icon">❓</span> Help
          </Link>
          <div className="user-info" onClick={handleUserInfoClick}>
            <div className="user-avatar">
              {}
            </div>
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
        <div className="transcript-header">
          <button onClick={handleBack} className="back-button">
            <span className="text">Edit Transcript</span>
          </button>
          {!isEditing ? (
            <button onClick={handleEdit} className="edit-button">Edit</button>
          ) : (
            <div className="edit-actions">
              <button onClick={handleDiscard} className="discard-button">Discard</button>
              <button onClick={handleSave} className="save-button">Save</button>
            </div>
          )}
        </div>
        <div className="transcript-content">
          <h3>Speaker</h3>
          <div className="transcript-text">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
              quo voluptas nulla pariatur?
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTranscript;