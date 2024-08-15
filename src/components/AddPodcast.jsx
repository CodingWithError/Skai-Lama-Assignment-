import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddPodcast.css';
import RSSFeedIcon from '../assets/RSSFeed.svg';
import YouTubeIcon from '../assets/YouTube.svg';
import UploadIcon from '../assets/Uploadpic.svg';
import YouTubeUploadModal from './YouTubeUploadModal';

const AddPodcast = () => {
  const [isYouTubeModalOpen, setIsYouTubeModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showProgressNotification, setShowProgressNotification] = useState(false);
  const navigate = useNavigate();

  const handleYouTubeClick = () => {
    setIsYouTubeModalOpen(true);
  };

  const handleYouTubeUpload = (name, link) => {
    const newFile = {
      id: uploadedFiles.length + 1,
      name,
      uploadDate: new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).replace(',', '|'),
      status: 'In Progress',
    };
    setUploadedFiles([...uploadedFiles, newFile]);
    setShowProgressNotification(true);
    setIsYouTubeModalOpen(false);
  };

  const handleDeleteFile = (id) => {
    
    const updatedFiles = uploadedFiles.filter(file => file.id !== id);
    
    
    const rearrangedFiles = updatedFiles.map((file, index) => ({
      ...file,
      id: index + 1 
    }));
    
    setUploadedFiles(rearrangedFiles);
    
    
    if (rearrangedFiles.length === 0) {
      setShowProgressNotification(false);
    }
  };

  const handleViewTranscript = (id) => {
    navigate(`/edit-transcript/${id}`);
  };

  return (
    <div className="add-podcast-container">
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
          <div className="user-info">
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
        <header>
          <nav>
            <span>Home Page / Sample Project / Add your podcast</span>
          </nav>
          <div className="header-icons">
            <span className="notification-icon">🔔</span>
            <span className="share-icon">🔗</span>
          </div>
        </header>

        <h1>Add Podcast</h1>

        {showProgressNotification && (
          <div className="progress-notification">
            {uploadedFiles.length} file(s) are in progress, you would get an email on tom@giftkart.app once the transcription is complete.
          </div>
        )}

        <div className="podcast-options">
          <div className="option-card">
            <h3>RSS Feed</h3>
            <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
            <img src={RSSFeedIcon} alt="RSS Feed" className="option-icon" />
          </div>
          <div className="option-card" onClick={handleYouTubeClick}>
            <h3>Youtube Video</h3>
            <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
            <img src={YouTubeIcon} alt="YouTube" className="option-icon" />
          </div>
          <div className="option-card">
            <h3>Upload Files</h3>
            <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
            <img src={UploadIcon} alt="Upload Files" className="option-icon" />
          </div>
        </div>

        {uploadedFiles.length === 0 ? (
          <div className="file-upload-area">
            <span className="cloud-upload-icon">☁️</span>
            <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
            <p>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
            <button className="select-file-btn">Select File</button>
          </div>
        ) : (
          <div className="uploaded-files">
            <h2>Your Files</h2>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Upload Date & Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file) => (
                  <tr key={file.id}>
                    <td>{file.id}</td>
                    <td>{file.name}</td>
                    <td>{file.uploadDate}</td>
                    <td>
                      <span className={`status ${file.status.toLowerCase().replace(' ', '-')}`}>
                        {file.status}
                      </span>
                    </td>
                    <td>
                      <button className="view-btn" onClick={() => handleViewTranscript(file.id)}>View</button>
                      <button className="delete-btn" onClick={() => handleDeleteFile(file.id)}>Delete</button>
                      <button className="move-btn">↕️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <YouTubeUploadModal 
        isOpen={isYouTubeModalOpen} 
        onClose={() => setIsYouTubeModalOpen(false)}
        onUpload={handleYouTubeUpload}
      />
    </div>
  );
};

export default AddPodcast;