// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../Signup/signup';  // Update the path
import Login from '../Login/loginform';  // Update the path
import Profile from '../Profile/profile';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile></Profile>} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
