'use strict'
const express = require('express')
const app = express()
const {router} = require('./router/router')
const morgan = require('morgan')
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false }))
app.use('/api',router)

let port = process.env.PORT || 3000


app.listen(port,(err)=> {
    if (err) return console.log(err);
    console.log(`server is running on port ${port}`);
    })


    