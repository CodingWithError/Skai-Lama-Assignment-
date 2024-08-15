import React, { useState } from 'react';
import YouTubeIcon from '../assets/YouTube.svg';

const YouTubeUploadModal = ({ isOpen, onClose, onUpload }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleUpload = () => {
    onUpload(name, link);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <img src={YouTubeIcon} alt="YouTube" className="youtube-icon" />
          <h2>Upload from Youtube</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter YouTube link"
          />
        </div>
        <div className="modal-footer">
          <button className="upload-button" onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeUploadModal;