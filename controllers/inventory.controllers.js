const Inventory = require('../models/inventory.model')


const materialIn = async function(req, res){

    const transaction = await Inventory.create({
        ...req.body,
        type: "IN"
    })

    res.status(201).json(transaction)
}

const materialOut = async function(req, res){
    const transcation = await Inventory.create({
        ...req.body,
        type: "OUT"
    })

    res.status(201).json(transaction)

}

const getInventoryHistory = async function(req, res){
    const history = await Inventory.find()
    .populate('material')
    .populate('warehouse')

    res.json(history)
}

module.exports = {
    materialIn,
    materialOut,
    getInventoryHistory
}