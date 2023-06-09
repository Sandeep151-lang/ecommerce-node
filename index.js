const express = require('express')
const product = require('./api/product')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');



var usersRouter = require('./routes/users');
var productRouter = require('./routes/createProduct');
var admin = require('./routes/admin')
var payment = require('./routes/payments');

app.use(cors({origin:"*"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next()
  })

// app.use('/', indexRouter);
app.use("/api/product",product)
app.use('/user', usersRouter);
app.use('/product', productRouter);
app.use('/admin', admin);
app.use('/payment', payment);


app.listen( 5000, (err,d)=>{
    if(err) console.log(err)
    console.log(`server is running in port 5000`)
  })
  
  module.exports == app