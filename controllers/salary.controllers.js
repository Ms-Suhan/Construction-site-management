const Salary = require('../models/salary.model')

const generateSalary = async function(req, res){
    const salary = await Salary.create(req.body)
    res.status(201).json(salary)
}

const getEmployeeSalary = async function(req, res){
    const salary = await Salary.find({
        employee: req.params.id
    })

    res.json(salary)
}


const markPaid = async function(req, res){
    const salary = await Salary.findByIdAndUpdate(
        req.parmas.id,
        {status: "paid"},
        {new: true}
    )

    res.json(salary)
}

module.exports = {
    generateSalary,
    getEmployeeSalary,
    markPaid
}