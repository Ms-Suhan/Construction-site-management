require('dotenv').config()
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI

async function dbConnect() {
    try{
        await mongoose.connect(`${MONGODB_URI}/construction-site-management`)
        console.log(`MongoDb connected sucessfuly!!`)

    }catch(error){
        console.log(`Error :: dbConnect.js :: while connecting database : ${error}`)
    }
}


module.exports = dbConnect