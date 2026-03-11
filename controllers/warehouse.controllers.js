const Warehouse = require('../models/warehouse.model')

const getWarehouses = async function(req, res){
    try {
        const warehouses = await Warehouse.find()

        res.json(warehouses)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getWarehouse = async function(req, res){
    try{
        const warehouse = await Warehouse.findById(req.params.id)

        if(!warehouse){
            res.status(404).json({message: "Warehouse not found"})
        }

        res.status(200).json(warehouse)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

const createWarehouse = async function(req, res){
    try{
        const warehouse = await Warehouse.create(req.body)
        res.status(201).json({message: "Warehouse created"}, warehouse)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateWarehouse = async function(req, res){
    try{
        const warehouse = await Warehouse.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(201).json({message : "Warehouse updated", warehouse})
    }catch (error){
        res.status(500).json({message: error.message})

    }
}

const deleteWarehouse = async function(req, res){
    try {
        await Warehouse.findByIdAndDelete(req.params.id)

        res.json({message: "warehouse deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createWarehouse,
    getWarehouse,
    getWarehouses,
    deleteWarehouse,
    updateWarehouse
}