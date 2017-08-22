const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/feedback', function (err, db) {
    if (err) {
        throw err;
    }
});

app.use('/api/v1',require('./api/v1'));

app.use((req,res)=>{
    res.status(404).send("Resource not found");
});

app.listen(port);
console.log("Application is running on ", port);