var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017';

router.get('/',function(req,res,next){
    res.render('../app.component/app.component');
});

router.post('/',function(req,res,next){
    var details = {
        Rating: req.body.inputRate,
        Review: req.body.inputReview
    }
});

router.get('/',function(req,res,next){
    var resultArray = [];
    mongo.connect(url,function(err,db){
        assert.equal(null,err);
        var current = db.collection('user-data').find();
        current.forEach(function(doc,err){
            assert.equal(null,err);
            resultArray.push(doc);
        },function(){
            db.close();
            res.render('../app.component/app.component',{index:resultArray});
        });
    });
});

mongo.connect(url,function(err,db){
    assert.equal(null,err);
    db.collection('user-data').insertOne(item, function(err, result){
        assert.equal(null,error);
        console.log('Item Inserted');
        db.close();
    });
});

module.exports = router;