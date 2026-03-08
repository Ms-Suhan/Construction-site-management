const mongoose = require('mongoose')


const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    unit: String,
    price_per_unit : Number,
    suppliers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Supplier"
        }
    ],
    description: String
}, {timestamps: true})


const Material = mongoose.model("Material", materialSchema)

module.exports = materialSchema