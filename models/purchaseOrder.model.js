const mongoose = require('mongoose')

const purchaseOrderSchema = new mongoose.Schema({

    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier"
    },

    warehouse:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Warehouse"
    },

    ordered_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    materials:[
        {
            material:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Material"
            },

            quantity: Number,

            price_per_unit: Number
        }
    ],

    total_cost: Number,

    order_date: Date,

    delivery_date: Date,

    status:{
        type:String,
        enum:["pending","shipped","delivered","cancelled"]
    }

})
const PurchaseOrder = mongoose.model("PurchaseOrder",purchaseOrderSchema)

module.exports = PurchaseOrder