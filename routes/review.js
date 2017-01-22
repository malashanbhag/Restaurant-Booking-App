var express = require('express');
var reviewSchema = require('../database/review');
var router = express.Router();

router.get('/getReviews', function (req, res, next) {
    reviewSchema.find({},function (err, response) {
        if(err) throw error;
        console.log(response);
        res.json({reviewList : response});
    })
});

router.post('/', function (req,res,next) {
    console.log('Inside post() review',req.body);
    var review = new reviewSchema({
        restuarantName : req.body.restuarantName,
        customerName : req.body.customerName,
        review : req.body.review
    });
    
    return new Promise(function(resolve, reject) {
        review.save(function (err) {
            if (err) throw err;
            console.log('Review saved successfully!');
            resolve();
            res.json({msg: 'Successfully saved review'})
        });
    });


});
module.exports = router;