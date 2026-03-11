require('dotenv').config()
const express = require('express')
const dbConnect = require('./dbConnect')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8000

const userRoute = require('./routes/user.route')
const projectRoute = require('./routes/project.route')
const materialRoute = require('./routes/material.route')
const supplierRoute = require('./routes/supplier.route')


dbConnect();

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get("/", (req, res) => {
    res.send("Welcome to website")
})
app.use('/api/v1/user', userRoute)
app.use('/api/v1/project', projectRoute)
app.use('/api/v1/material', materialRoute)
app.use('/api/v1/supplier', supplierRoute)



app.listen(PORT, () => {
    console.log(`Server Running at Port : ${PORT}`);
})