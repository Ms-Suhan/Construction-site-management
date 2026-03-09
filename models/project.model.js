const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    client_name: {
        type: String
    },
    manager:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    site_engineers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    workers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }  
    ],
    warehouse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Warehouse"
        },
    materials_required: [
        {
            material: {
                type : mongoose.Schema.Types.ObjectId,
                ref: "Material"
            },
            quantity: Number
        }
    ],
    budget: {
        type: Number,
        default: 0
    },
    start_date : Date,
    end_date : Date,

    status: {
        type: String,
        enum: ["planned", "ongoing", "completed", "delayed"],
        default: "ongoing"
    }

}, { timestamps: true})

const Project = mongoose.model("Project", projectSchema)

module.exports = Project