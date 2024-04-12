const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/AlienDBex'
const app = express()

mongoose.connect(url,{useNewurlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('Connected.........')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,function(){
    console.log('Server Started')
})