const Material = require('../models/material.model')


const getMaterials = async function(req, res) {
    try {
        const materials = await Material.find()

        res.status(200).json(materials)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getMaterial = async function(req, res){
    try {
        const material = await Material.findById(req.params.id)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createMaterial = async function(req, res){
    const material = await Material.create(req.body)

    res.status(201).json(material)

}

const updateMaterial = async function(req, res){
    const material = await Material.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.json(material)
}

const deleteMaterial = async function(req, res){
    await Material.findByIdAndDelete(req.params.id)
    res.json({message: "Material Deleted"})
}

module.exports = {
    getMaterials,
    getMaterial,
    createMaterial,
    updateMaterial,
    deleteMaterial
}