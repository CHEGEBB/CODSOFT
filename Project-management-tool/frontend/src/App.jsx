import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import Tasks from './pages/Tasks'
import Sidenav from './components/Sidenav'


const App = () => {
    return (
        <Router>
        <div className="app">
        <Sidenav />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;