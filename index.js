const express = require('express')

const app = new express();
const PORT = process.env.PORT || 1000
const RoutePub = require('./Routes/RoutePub')
const dbconnect = require('./config/dbconnect');
const  dotenv  = require('dotenv');

dotenv.config()
dbconnect()

app.use(express.json())


app.use('/api/pub/' , RoutePub)

app.listen(PORT , ()=>{
    console.log(`rendez-vous sur : localhost:${PORT}`)
})