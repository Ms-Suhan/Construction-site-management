const express = require('express')

const router = express.Router()

const {
    getEmployeeSalary,
    markPaid,
    generateSalary

} = require('../controllers/salary.controllers')


router.get('/generate', generateSalary)

router.get('/employee/:id', getEmployeeSalary)

router.put('/pay/:id', markPaid)

module.exports = router