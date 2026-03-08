const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact_person: {
        type: String
    },
    phone: {
        type: String

    },
    email: String,
    location: String,
    materials_supplied: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Material"
        }
    ],
    rating: Number
}, {timestamps: true})


const Supplier = mongoose.model("Supplier", supplierSchema)

module.exports = Supplier