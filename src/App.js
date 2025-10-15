import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import Clients from './pages/Clients';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Overview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="clients" element={<Clients />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
