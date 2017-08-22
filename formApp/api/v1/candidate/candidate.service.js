const Feedback = require('./candidate.entity');

const addCandidate = function(candidateObj, done){
    let candidate = new Feedback();
    candidate.fullName = candidateObj.fullName;
    candidate.gender = candidateObj.gender;
    candidate.collegeName = candidateObj.collegeName;
    candidate.internshipCompanyName = candidateObj.internshipCompanyName;
    candidate.review = candidateObj.review;

    candidate.save(function(err,result){
        if(err){
            console.log("Error in saving Candidate details: ", err);
            done(err);
            return;
        }
        let resultObj = {fullName: result.fullName, gender: result.gender, collegeName: result.collegeName, internshipCompanyName: result.internshipCompanyName, review: result.review };
        done(null, resultObj);
    });
}

module.exports = {
    addCandidate
}