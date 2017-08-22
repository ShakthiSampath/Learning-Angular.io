const router = require('express').Router();
const candidateCtrlr = require('./candidate.controller');

router.post('/add',function(req,res){
    try{
        candidateCtrlr.addCandidate(req.body, (err,result) => {
            if(err) {
                res.status(500).send({error: "Internal error. Please try again."});
                return;
            }

            res.send(result);
            return;
        })
    } catch (err){
        console.log("Error in route /candidate/add, error: ", err);
        res.status(500).send({error: "Internal error. Please try again." })
    }
});

module.exports = router;