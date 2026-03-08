const mongoose = require('mongoose')


const inventorySchema = new mongoose.Schema({
    material: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material"
    },
    warehouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse"
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    type: {
        type: String,
        enum : ["IN", "OUT"]
    },
    quantity: Number,
    issued_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: Date,
    notes: String
}, {timestamps: true})