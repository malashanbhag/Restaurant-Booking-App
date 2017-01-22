var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost/booking');

var restuarantDb = mongoose.connection;
restuarantDb.on('error',console.error.bind(console,'Error connecting to restuarant database'));
restuarantDb.once('once',function(){ console.log('connected successfully to restuarant database'); }); 

var schema = mongoose.Schema;

var restaurantSchema = new schema({
    name: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    availability: {
        type : Number,
        required : true
    },
    capacity: {
        type: Number,
        required : true
    },
    cost: {
        type : Number,
        required : true
    },
    cuisines: {
        type : String,
        required : true
    }
});

var data = [
    {
        'name' : 'Martins Corner',
        'location' : 'Betalbatim, Goa',
        'availability' : 20,
        'capacity' : 4,
        'cost' : 1000,
        'cuisines' : 'Indian',
    },
    {
        'name' : 'Konkani Coastal Food Delicacy',
        'location' : 'Margao, Goa',
        'availability' : 10,
        'capacity' : 2,
        'cost' : 500,
        'cuisines' : 'Indian',
    },
    {
        'name' : 'Mickeys',
        'location' : 'Colva, Goa',
        'availability' : 10,
        'capacity' : 4,
        'cost' : 1500,
        'cuisines' : 'Indian',
    },
    {
        'name' : 'Kentuckee Seafood Restaurant',
        'location' : 'Colva, Goa',
        'availability' : 15,
        'capacity' : 4,
        'cost' : 800,
        'cuisines' : 'Chinese',
    },
    {
        'name' : 'Peppers Gourmet Cuisine',
        'location' : 'Margao, Goa',
        'availability' : 18,
        'capacity' : 3,
        'cost' : 1200,
        'cuisines' : 'Chinese',
    }
];

var restuarants = mongoose.model('restuarants', restaurantSchema);
//inserting dummy data
restuarants.collection.insertMany(data, function(err,r){
    assert.equal(null, err);
    assert.equal(data.length, r.insertedCount);
})

module.exports = restuarants;
