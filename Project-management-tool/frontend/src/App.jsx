import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import CreateProject from './pages/CreateProject';
import Progress from './pages/Progress';
import Timeline from './pages/Timeline';
import Sidenav from './components/Sidenav'
import Team from './pages/Teams';
import Details from './pages/Details';
import Assign from './pages/Assign';
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
                <Route path="/project/new" element={<CreateProject />} />
                <Route path="/tasks/assign" element={<Assign />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/team" element={<Team />} />
                <Route path="/project/details" element={<Details />} />
            </Routes>
            </div>
            </div>
        </Router>
    );
};

export default App;