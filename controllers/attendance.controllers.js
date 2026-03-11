const Attendance = require('../models/attendence.model')


const markAttandance = async function(req, res){
    const attendance = await Attendance.create(req.body)
    res.status(200).json(attendance)
}

const getEmployeeAttendance = async function(req, res){
    const attendance = await Attendance.find({
        employee: req.params.id
    })

    res.json(attendance)
}

module.exports = {
    markAttandance,
    getEmployeeAttendance
}