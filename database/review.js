var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost/booking');

var reviewDb = mongoose.connection;
reviewDb.on('error',console.error.bind(console,'Error connecting to review database'));
reviewDb.once('once',function(){ console.log('connected successfully to review database'); }); 

var schema = mongoose.Schema;

var reviewSchema = new schema({
    restuarantName: {
        type : String,
        required : true
    },
    customerName: {
        type : String,
        required : true
    },
    review: {
        type : String,
        required : true
    }
});

var reviews = mongoose.model('reviews', reviewSchema);

module.exports = reviews;