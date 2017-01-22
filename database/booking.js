var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost/booking');

var bookingDb = mongoose.connection;
bookingDb.on('error',console.error.bind(console,'Error connecting to booking database'));
bookingDb.once('once',function(){ console.log('connected successfully to booking database'); }); 

var schema = mongoose.Schema;

var bookingSchema = new schema({
    restuarantName: {
        type : String,
        required : true
    },
    customerName: {
        type : String,
        required : true
    },
    contactNo: {
        type : Number,
        required : true
    },
    emailId: {
        type: String,
        required : true
    },
    tablesRequired: {
        type : Number,
        required : true
    },
    timing: {
        type: String,
        required: true
    }
});

var bookings = mongoose.model('bookings', bookingSchema);

module.exports = bookings;