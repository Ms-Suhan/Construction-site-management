const express = require('express')

const router = express.Router()


const {
    markAttandance,
    getEmployeeAttendance
} = require('../controllers/attendance.controllers')

router.post('/mark', markAttandance)

router.get('/employee/:id', getEmployeeAttendance )

module.exports = router