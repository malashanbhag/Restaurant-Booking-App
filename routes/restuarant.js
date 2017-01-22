var express = require('express');
var restaurantSchema = require('../database/restuarant');
var router = express.Router();

router.get('/getRestuarants', function (req, res, next) {
    restaurantSchema.find({},function (err, response) {
        if(err) throw error;
        console.log(response);
        res.json({restaurantList : response});
    })
});

router.post('/addRestuarant', function(req,res,next){
    console.log('Inside post() - add new restuarant', req.body);
    var obj = new restaurantSchema({
        name: req.body.name,
        location : req.body.location,
        availability : req.body.availability,
        capacity : req.body.capacity,
        cost : req.body.cost,
        cuisines : req.body.cuisines
    });
    return new Promise(function(resolve, reject) {
        obj.save(function (err) {
            if (err) throw err;
            console.log('Restaurant saved successfully!');
            resolve();
        });
    });
});

router.post('/editRestuarant', function (req, res, next) {
    console.log('Inside post() - edit restuarant',req.body);
    //exec update query
    restaurantSchema.update({_id:req.body._id}, {$set: {availability:req.body.availability, capacity:req.body.capacity}}, function (err) {
        if(err) throw err;
        console.log('successfully updated Restaurant');
    });
});

router.post('/delete', function (req, res, next) {
    console.log('Inside delete() - restaurant',req.body.id);
    console.log(req.body.id);
    //exec query to delete
    restaurantSchema.remove({_id:req.body.id},function (err) {
        if (err) throw err;
        console.log('successfully deleted restuarant' , req.body.id);
    });
});



module.exports = router;