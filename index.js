require('dotenv').config()
const express = require('express')
const dbConnect = require('./dbConnect')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8000

const authRoute = require("./routes/auth.route")
const userRoute = require('./routes/user.route')
const projectRoute = require('./routes/project.route')
const materialRoute = require('./routes/material.route')
const supplierRoute = require('./routes/supplier.route')
const attendanceRoute = require('./routes/attendance.route')
const salaryRoute = require('./routes/salary.route')
const purchaseOrderRoute = require('./routes/purchaseOrder.route')
const warehouseRoute = require('./routes/warehouse.route')
const inventoryRoute = require('./routes/inventory.route')
const dashboardRoute = require('./routes/dashboard.route')



const app = express()

dbConnect();

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get("/", (req, res) => {
    res.send("Welcome to Construction Site Management")
})

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/project', projectRoute)
app.use('/api/v1/material', materialRoute)
app.use('/api/v1/supplier', supplierRoute)
app.use('/api/v1/attendance', attendanceRoute)
app.use('/api/v1/salary', salaryRoute)
app.use('/api/v1/purchaseOrder', purchaseOrderRoute)
app.use('/api/v1/warehouse', warehouseRoute)
app.use('/api/v1/inventory', inventoryRoute)
app.use('/api/v1/dashboard', dashboardRoute)




app.listen(PORT, () => {
    console.log(`Server Running at Port : ${PORT}`);
})