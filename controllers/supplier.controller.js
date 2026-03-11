const Supplier = require('../models/supplier.model')

const getSuppliers = async function(req, res) {
    try {
        const suppliers = await Supplier.find()

        res.status(201).json(suppliers)
    } catch (error) {
        res.status(500).jso({message: error.message})
    }
}

const getSupplier = async function(req, res){
    try {
        const supplier = await Supplier.findById(req.params.id)

        if(!supplier){
            return res.status(404).json({message: "Supplier not found"})
        }

        res.status(200).json(supplier)
    } catch (error) {
        res.status(500).jso({message: error.message})
    }
}


const createSupplier = async function(req, res){
    try {
        const supplier = await Supplier.create(req.body)

        res.status(201).json({message : "Supplier created successfully", supplier})
    } catch (error) {
        res.status(500).jso({message: error.message})
    }
}


const updateSupplier = async function(req, res){
    const supplier = await Supplier.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )

    res.status(200).json({message: "Supplier updated", supplier})
}

const deleteSupplier = async function(req, res){
    await Supplier.findByIdAndDelete(req.params.id)

    res.json({message: "Supplier Deleted Successfully!"})
}


module.exports = {
    getSupplier,
    getSuppliers,
    createSupplier,
    updateSupplier,
    deleteSupplier
}

