const express = require('express')

const router = express.Router()


const {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/purchaseOrder.controllers')

router.get('/', getOrders)

router.get('/:id', getOrder)

router.post('/', createOrder)

router.put('/:id', updateOrder)

router.delete('/:id', deleteOrder)

module.exports = router