app.controller('addRestaurant',['$scope','Restaurants', function ($scope,Restaurants) {
    
    console.log('Inside add restuarant controller',Restaurants);
    $scope.addRestaurant = function () {
        var addRestInfo = {
            name : $scope.name,
            location : $scope.location,
            availability : $scope.availability,
            capacity : $scope.capacity,
            cost : $scope.cost,
            cuisines : $scope.cuisines
        };

        console.log(addRestInfo);
        Restaurants.addRestaurant(addRestInfo).then(function (results) {
            console.log('Inside addRestuarant() function',results.data);
        });
    }
}]);