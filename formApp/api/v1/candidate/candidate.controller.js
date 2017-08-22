const candidateService = require('./candidate.service');

const addCandidate = function (candidateObj,done){
    candidateService.addCandidate(candidateObj,done);
}

module.exports = {
    addCandidate
}