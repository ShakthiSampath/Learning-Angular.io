const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    fullName: { type: String, required: true, unique: true},
    gender: { type: String, required: true},
    collegeName: {type: String, required: true},
    internshipCompanyName: {type: String, required: true},
    review: {type: String, required: true}

});

module.exports = mongoose.model('Feedback', schema);