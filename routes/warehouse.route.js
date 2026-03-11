const express = require('express')

const router = express.Router()

const {
    createWarehouse,
    getWarehouse,
    getWarehouses,
    deleteWarehouse,
    updateWarehouse
} = require('../controllers/warehouse.controllers')


router.get('/', getWarehouses)

router.get('/:id', getWarehouse)

router.post('/', createWarehouse)

router.put('/:id', updateWarehouse)

router.delete('/:id', deleteWarehouse)


module.exports = router