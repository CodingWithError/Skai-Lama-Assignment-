import React, { useState } from 'react';
import '../styles.css';
import Group22 from "../assets/Group22.svg";
import google from "../assets/google.svg";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin();
  };

  const handleGoogleLogin = () => {
   
    onLogin();
  };

  return (
    <div className="login-form">
      <img src={Group22} alt="Ques.AI" className="logo" />
      <h2>Welcome to Ques.AI</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="or">or</div>
      <button className="google-button" onClick={handleGoogleLogin}>
        <img src={google} alt="Google" />
        Continue with Google
      </button>
      <p className="create-account">
        Don't have an account? <a href="#">Create Account</a>
      </p>
    </div>
  );
};

export default LoginForm;