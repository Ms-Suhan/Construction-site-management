const mongoose = require('mongoose')


const warehouseSchema = new mongoose.Schema({
    name: String,
    location: String,
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    materials: [
        {
            materials: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Material"
            },
            quantity: Number
        }
    ],
    
}, {timestamps: true})

const Warehouse = mongoose.model("Warehouse", warehouseSchema)

module.exports = Warehouse