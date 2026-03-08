const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },

    date: Date,
    
    check_in : String,
    check_out: String,

    status: {
        type: String,
        enum: ["present", "absent", "leave"]
    }
}, {timestamps: true})

const Attendance = mongoose.model("Attendance", attendanceSchema)

module.exports = Attendance