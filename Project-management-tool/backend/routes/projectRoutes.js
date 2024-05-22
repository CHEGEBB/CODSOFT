// backend/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

router.route('/')
    .get(getProjects)
    .post(createProject);

module.exports = router;
