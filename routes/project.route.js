require('dotenv').config()
const express = require('express')

const Project = require('../models/project.model')

const router = express.Router()


router.post("/create", async (req, res) => {
    const body = req.body
    await Project.create({
       name: body.name,
       description: body?.description,
       client_name: body?.client_name,
       manager: body?.manager,
       site_engineers: body?.site_engineers,
       workers: body?.workers,
       warehouse: body?.warehouse,
       materials_required: body?.materials_required,
       budget: body?.budget,
       status: body?.status 
    })

    res.send("Project Created")
})

router.post("/edit-project", async (req, res) => {
    const body = req.body

    await Project.updateOne(
        { name: body.name },
        { 
            $set: {manager: body?.manager},
            $set: {warehouse: body?.warehouse},
            $push: {site_engineers : body?.site_engineers},
            $push: {workers : body?.workers},
        }
)

    res.send("project updated")
})

module.exports = router