const PurchaseOrder = require('../models/purchaseOrder.model')



const getOrders = async function(req, res){
    const orders = await PurchaseOrder.find()

    res.json(orders)
}

const getOrder = async function(req, res){
    const order = await PurchaseOrder.findById(req.params.id)

    if(!order){
        return res.status(404).json({message: "Order not found"})
    }

    res.json(order)
}


const createOrder = async function(req, res){
    await PurchaseOrder.create(req.body)

    res.status(201).json({message: "Order created"})
}

const updateOrder = async function(req, res){
    const order = await PurchaseOrder.findByIdAndUpdate(
        req.parmas.id,
        req.body,
        {new: true}
    )
    res.json(order)
}

const deleteOrder = async function(req, res){
    await PurchaseOrder.findByIdAndDelete(req.parmas.id)

    res.json({message: "Order deleted"})
}

module.exports = {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}