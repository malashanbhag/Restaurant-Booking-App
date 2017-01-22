app.controller('editRestaurant', ['$scope','Restaurants','$stateParams', function ($scope, Restaurants,$stateParams) {
    $scope.name = $stateParams.name;
    $scope.availability = $stateParams.availability;
    $scope.capacity = $stateParams.capacity;
    $scope._id = $stateParams._id;
    
    var obj = {
        _id : $scope._id,
        availability : $scope.availability,
        capacity : $scope.capacity
    };
    
    console.log(obj);
    
    $scope.editRestaurant = function(){
        Restaurants.editRestaurant(obj).then(function (results) {
            console.log('Response',results.msg);
        });  
    }
}]);