require('dotenv').config()
const express = require('express')

const Project = require('../models/project.model')

const router = express.Router()

const {
    createProject,
    updateProject,
    getProject,
    getProjects,
    deleteProject,
    updateProgress,
    addWorker,
    
} = require('../controllers/project.controllers')

router.post("/create", createProject)

router.get('/:id', getProject )

router.get('/projects/:id', getProjects)

router.post('/update-progress', updateProgress)

router.delete('/delete-project/:id', deleteProject)

router.post('/update-project/:id', updateProject)

router.post('/add-worker/:id', addWorker)



module.exports = router