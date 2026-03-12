const { 
    getSupplier,
    getSuppliers,
    updateSupplier,
    createSupplier,
    deleteSupplier
} = require("../controllers/supplier.controllers")

const {Router} = require('express')


const router = Router()

router.get('/', getSuppliers)

router.get('/:id', getSupplier)

router.post('/', createSupplier)

router.put('/:id', updateSupplier)

router.delete('/:id', deleteSupplier)

module.exports = router