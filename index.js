require('dotenv').config()
const express = require('express')
const dbConnect = require('./dbConnect')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8000

const userRoute = require('./routes/user.route')


dbConnect();

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get("/", (req, res) => {
    res.send("Welcome to website")
})
app.use('/user', userRoute)



app.listen(PORT, () => {
    console.log(`Server Running at Port : ${PORT}`);
})