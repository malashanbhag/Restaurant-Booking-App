
app.controller('bookingCtrl', ['$scope','Restaurants','$stateParams', function ($scope, Restaurants,$stateParams) {
    $scope.value = $stateParams.name;
    
    Restaurants.BookingsList().then(function (results) {
        console.log('Inside booking controller',results.data.bookingList);
        $scope.result = results.data.bookingList;
    });
    
    $scope.confirmBooking = function() {
        var obj = {
            restuarantName : $stateParams.name,
            customerName: $scope.name,
            contactNo: $scope.number,
            emailId: $scope.email,
            tablesRequired: $scope.tables,
            timing: $scope.timing
        };
        console.log(obj);
      Restaurants.bookRestaurant(obj).then(function (results) {
            console.log('Response',results.msg);
        });  
    };
    
    $scope.DeleteBooking = function(obj) {
        console.log('In delete booking()');
        console.log(obj);
        Restaurants.deleteBooking(obj).then(function (results) {
            console.log('Response',results.msg);
        });
    };
}]);