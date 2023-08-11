const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser=require('cookie-parser')


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DataBase Connected"))
.catch((err) => console.log("DataBase not Connected", err))


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use('/', require('./routes/authRoutes'))



const port = 8080;
app.listen(port, () => console.log(`server is runnig on port ${port}`))