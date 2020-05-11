'use strict'
const express = require('express')
const app = express()
const {router} = require('./router/router')
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false }))
app.use('/api',router)

let port = process.env.PORT || 8000


app.listen(port,(err)=> {
    if (err) return console.log(err);
    console.log(`server is running on port ${port}`);
    })


    