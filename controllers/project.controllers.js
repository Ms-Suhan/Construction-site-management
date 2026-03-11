const Project = require('../models/project.model')
const Project = require('../models/project.model')
const User = require('../models/user.model')


 const createProject = async (req, res) => {
    const body = req.body
    
    try{
        const Project = await Project.create(body)

    res.status(201).json({
        message: "Project Created Successfully",
        Project
    })
    }catch (error){
        res.json({
            message: error.message
        })
    }
    res.send("Project Created")
}


const getProjects = async (req, res) => {
    try{
        const projects = await Project.find()
            .populate("manager")
            .populate("site_workers")
            .populate("workers")


        res.status(200).json(projects)

    }catch (error){
        res.status(500).json({message: error.message})
    }
}

const getProject = async (req, res) => {
    try{
        const project = await Project.findbyId(req.params.id)

        if(!project){
            return res.status(404).json({message: "Project not found"})
        }

        res.status(200).json(project)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

const updateProject = async (req, res) => {
    try {
        const allowed_updates = {

        }
        const project = await Project.findOneAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        if(!project){
            return res.status(404).json({message: "Project not found."})
        }

        res.status(200).json({message: "Project updated successfully", project})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



const deleteProject = async (req, res) => {
    try {
        
        const project = await Project.findOneAndDelete(req.params.id)

        if(!project){
            return res.status(404).json({message: "Project not found."})
        }

        res.status(200).json({message: "Project deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const addWorker = async (req, res) => {
    try {
        const {workerId} = req.body

        const project = await  Project.findById(req.params.id)

        if(!project){
            return res.status(404).json({
                message: "Project not found"
            })
        }

        const worker = await User.findById(workerId)

        if(!worker){
            return res.status(404).json({
                message: "Worker not found"
            })
        }

        if(worker.role !== "worker"){
            return res.status(400).json({message: "User not a worker"})
        }

        if(project.workers.includes(workerId)){
            return res.status(400).json({
                message: "Worker already assigned to project"
            })
        }

        project.workers.push(workerId)

        await project.save()

        res.status(200).json({
            message: "Worker added successfully",
            project
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const updateProgress = async (req, res) => {
    try {
        const {percentage_complete}  = req.body

        const project = await Project.findbyId(req.body.id)

        if(!project){
            return res.status(404).json({
                message: "Project not found"
            })
        }

        project.percentage_complete = percentage_complete

        await project.save()

        res.status(200).json({
            message: "Project progress updated",
            project
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    createProject,
    updateProject,
    getProject,
    getProjects,
    deleteProject,
    updateProgress,
    addWorker

}