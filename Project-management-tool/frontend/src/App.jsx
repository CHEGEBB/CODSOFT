import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import Sidenav from './components/Sidenav'


const App = () => {
    return (
        <Router>
        <div className="app">

            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;