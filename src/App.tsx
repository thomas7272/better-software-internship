import React from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Better Software</h1>
      <div className="form-container">
        <h2>Sign Up</h2>
        <SignUpForm />
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
