
const express = require('express');
const router = express.Router();

// router.post('/',function(req,res,next){
//     var details = {
//         Rating: req.body.inputRate,
//         Review: req.body.inputReview
//     }
// });

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log("hi");
});
// router.get('/',function(req,res,next){
//     var resultArray = [];
//     mongo.connect(url,function(err,db){
//         assert.equal(null,err);
//         var current = db.collection('user-data').find();
//         current.forEach(function(doc,err){
//             assert.equal(null,err);
//             resultArray.push(doc);
//         },function(){
//             db.close();
//             res.render('../app.component/app.component',{index:resultArray});
//         });
//     });
// });

module.exports = router;
