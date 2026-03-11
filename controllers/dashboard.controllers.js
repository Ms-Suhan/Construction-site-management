const Project = require('../models/project.model')
const User = require('../models/user.model')
const Warehouse = require('../models/warehouse.model')

const getDashboardStats = async function (req, res){
    const totalUsers = await User.countDocuments()

    const totalProjects = await Project.countDocuments()

    const totalWarehouse = await Warehouse.countDocuments()

    const completedProjects = await Project.countDocuments({
        status: "completed"
    })

    res.json({
        totalUsers,
        totalProjects,
        totalWarehouse,
        completedProjects
    })
}


module.exports = {
    getDashboardStats
}