var app = angular.module('myApp', ['ui.router']);

app.factory('Restaurants',function ($http) {

    var getRestaurantsList = function(){
        return $http.get('/getRestuarants', {}).success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    };
    var getReviewsList = function(){
        return $http.get('/review/getReviews', {}).success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    };
    var getbookingsList = function(){
        return $http.get('/book/getBookings', {}).success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    };
    var bookRestaurant = function(obj){
      return $http.post('/book',obj).success(function(data,status){
          console.log(status);
      }).error(function(err){
         console.log('error',err); 
      });
    };
    var addRestaurant = function(obj){
      return $http.post('/addRestuarant',obj).success(function(data,status){
          console.log(status);
      }).error(function(err){
         console.log('error',err); 
      });
    };
    var addReview = function(obj){
      return $http.post('/review',obj).success(function(data,status){
          console.log(status);
      }).error(function(err){
         console.log('error',err); 
      });
    };
    var editRestaurant = function(obj){
        console.log('In edit restaurant');
      return $http.post('/editRestaurant',obj).success(function(data,status){
          console.log(status);
      }).error(function(err){
         console.log('error',err); 
      });
    };
    var deleteRestaurant = function(obj){
      return $http.post('/delete',obj).success(function(data,status){
          console.log(status);
      }).error(function(err){
         console.log('error',err); 
      });
    };
    var deleteBooking = function(obj){
      return $http.post('/book/deleteBooking',obj).success(function(data,status){
          console.log(status);
      }).error(function(err){
         console.log('error',err); 
      });
    };
    return {
        RestaurantsList : getRestaurantsList,
        ReviewsList : getReviewsList,
        BookingsList : getbookingsList,
        bookRestaurant : bookRestaurant,
        addRestaurant : addRestaurant,
        deleteRestaurant : deleteRestaurant,
        editRestaurant : editRestaurant,
        addReview : addReview,
        deleteBooking : deleteBooking
    }
});

