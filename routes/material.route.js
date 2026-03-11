const express = require('express')
const { 
    getMaterials,
    getMaterial,
    createMaterial,
    updateMaterial,
    deleteMaterial
} = require('../controllers/material.controllers')


const router = express.Router()


router.get('/', getMaterials )

router.get('/:id', getMaterial)

router.post('/', createMaterial)

router.put('/:id', updateMaterial)

router.delete('/:id', deleteMaterial)


module.exports = router