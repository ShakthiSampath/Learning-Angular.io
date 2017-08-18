const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema   = new Schema({
    fullname: { type: String, required: true, unique: true},
    gender: { type: Number, default: 0},
    collegeName: {type: String, required: true},
    internshipCompanyName: {type: String, required: true},
    review: {type: String, required: true}

});

module.exports = mongoose.model('feedback', schema);