import { useState } from 'react'
import './styles.css'
import LoginForm from './components/LoginForm'
import HeroSection from './components/HeroSection'
import CreateProject from './components/CreateProject'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPodcast from './components/AddPodcast';
import EditTranscript from './components/EditTranscript';
import AccountSettings from './components/AccountSettings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <HeroSection />
        <LoginForm onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateProject />} />
        <Route path="/project/:projectId/add-podcast" element={<AddPodcast />} />
        <Route path="/edit-transcript/:id" element={<EditTranscript />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  )
}

export default App