app.controller('viewRestaurant', ['$scope','Restaurants', function ($scope, Restaurants) {
    
    Restaurants.RestaurantsList().then(function (results) {
        console.log('Inside controller',results.data.restaurantList);
        $scope.RestList = results.data.restaurantList
    });
    
    $scope.DeleteRestaurant = function(obj){
        console.log('In delete function');
        console.log(obj.id);
        if(confirm('Do you want to delete?')){
            Restaurants.deleteRestaurant(obj).then(function (results) {
                console.log(results.data.success);
            });
        }
    }
    
}]);