var express = require('express');
var bookingSchema = require('../database/booking.js');
var router = express.Router();

router.get('/getBookings', function (req, res, next) {
    bookingSchema.find({},function (err, response) {
        if(err) throw error;
        console.log(response);
        res.json({bookingList : response});
    })
});

router.post('/', function (req,res,next) {
    console.log('Inside post() booking',req.body);
    var booking = new bookingSchema({
        restuarantName : req.body.restuarantName,
        customerName : req.body.customerName,
        contactNo : req.body.contactNo,
        emailId : req.body.emailId,
        tablesRequired : req.body.tablesRequired,
        timing : req.body.timing
    });
    
    return new Promise(function(resolve, reject) {
        booking.save(function (err) {
            if (err) throw err;
            console.log('Booking saved successfully!');
            resolve();
            res.json({msg: 'Successfully saved booking'})
        });
    });
});

router.post('/deleteBooking', function (req, res, next) {
    console.log('Inside delete() - booking',req.body.id);
    console.log(req.body.id);
    //exec query to delete
    bookingSchema.remove({_id:req.body.id},function (err) {
        if (err) throw err;
        console.log('successfully deleted booking' , req.body.id);
    });
});
module.exports = router;