const express =require('express');
const morgan = require('morgan');
const db =require('./mongodb')
const studentroute =require('./route/studentroute');

const app =express();
app.use(morgan('dev'));
app.use('/api',studentroute)
app.listen(3005,()=>{
    console.log("listing to the port in 3005")
})
//
