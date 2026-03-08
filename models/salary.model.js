const mongoose = require('mongoose')

const salarySchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    base_salary: Number,
    bonus: Number,
    deductions: Number,
    overTime: Number,
    final_salary: Number,
    month: String,
    payment_date: Date,
}, {timestamps: true})


const Salary = mongoose.model("Salary", salarySchema)

module.exports = Salary