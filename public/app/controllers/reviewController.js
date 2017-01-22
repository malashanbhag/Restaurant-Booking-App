app.controller('reviewCtrl', ['$scope','Restaurants', function ($scope, Restaurants) {
    $scope.msg = 'In review controller';
    
    Restaurants.RestaurantsList().then(function (results) {
        console.log('Inside review controller',results.data.restaurantList);
        $scope.result = results.data.restaurantList;
    });
    
    Restaurants.ReviewsList().then(function (results) {
        console.log('Reviews',results.data.reviewList);
        $scope.review = results.data.reviewList;
    });
    
    $scope.addReview = function(){
        var obj = {
          restuarantName : $scope.restName,
          customerName : $scope.name,
          review : $scope.comments
        };
        console.log(obj);
        Restaurants.addReview(obj).then(function (results) {
            console.log('Response',results.msg);
        }); 
        
    };
}]);