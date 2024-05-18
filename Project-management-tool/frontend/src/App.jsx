import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import Tasks from './pages/Tasks'
import Progress from './pages/Progress';
import Timeline from './pages/Timeline';
import Sidenav from './components/Sidenav'
import Team from './pages/Teams';
import { useState } from 'react';



const App = () => {
    return (
        <Router>
        <div className="app">
        <div className="sidebar">
        <Sidenav />
        </div>
        <div className="main-app">

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/team" element={<Team />} />
            </Routes>
            </div>
            </div>
        </Router>
    );
};

export default App;