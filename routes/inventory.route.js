const express = require('express')
const { 
    materialIn,
    materialOut,
    getInventoryHistory
 } = require('../controllers/inventory.controllers')

const router = express.Router()

router.post('/in', materialIn )

router.post('/out', materialOut )

router.get('/history', getInventoryHistory)


module.exports = router