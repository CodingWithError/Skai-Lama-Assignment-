import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import QuesLogo2 from "../assets/QuesLogo2.svg";
import Group16 from "../assets/Group16.svg";

const CreateProject = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [error, setError] = useState('');

  const handleCreateClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setProjectName('');
    setError('');
  };

  const handleCreate = () => {
    if (projectName.trim() === '') {
      setError("Project Name Can't be empty");
    } else {
      const newProject = {
        _id: Date.now().toString(),
        name: projectName,
        initials: projectName.substring(0, 2).toUpperCase(),
        episodes: 0
      };
      setProjects([...projects, newProject]);
      setShowModal(false);
      setProjectName('');
      setError('');
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}/add-podcast`);
  };

  return (
    <div className="project-dashboard">
      <header>
        <img src={QuesLogo2} alt="Ques.AI" className="logo" />
        <div className="header-icons">
          <span className="settings-icon">⚙️</span>
          <span className="notification-icon">🔔</span>
        </div>
      </header>
      
      {projects.length === 0 ? (
        <div className="create-project-content">
          <h1>Create a New Project</h1>
          <img src={Group16} alt="Create Project Illustration" className="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
          <button className="create-project-button" onClick={handleCreateClick}>+ Create New Project</button>
        </div>
      ) : (
        <>
          <div className="projects-header">
            <h1>Projects</h1>
            <button className="create-project-button" onClick={handleCreateClick}>+ Create New Project</button>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project._id} className="project-card" onClick={() => handleProjectClick(project._id)}>
                <div className="project-initials" style={{backgroundColor: '#FFA500'}}>{project.initials}</div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.episodes} episodes</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Project</h2>
            <label htmlFor="projectName">Enter Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Type here"
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
              <button className="create-button" onClick={handleCreate}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProject;