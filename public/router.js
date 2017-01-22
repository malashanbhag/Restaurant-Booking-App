app.config(function ($stateProvider, $urlRouterProvider) {


    var home = {
        name : 'View Restuarant',
        url : '/home',
        controller: 'viewRestaurant',
        controllerAs: 'index',
        templateUrl : 'app/templates/home.html'
    };
    
    var book = {
        
        name: 'Book',
        url: '/book/:name',
        controller: 'bookingCtrl',
        templateUrl: 'app/templates/booking.html'
    };

    var add = {
        name : 'Add Restuarant',
        url : '/add',
        controller: 'addRestaurant',
        templateUrl: 'app/templates/addRestaurant.html'
    };
    
    var edit = {
        
        name: 'Edit',
        url: '/edit/:name?availability?capacity?_id',
        controller: 'editRestaurant',
        templateUrl: 'app/templates/editRestaurant.html'
    };
    
    var reviews = {
        name : 'Reviews',
        url : '/reviews',
        controller: 'reviewCtrl',
        templateUrl: 'app/templates/reviews.html'
    };
    
    var view = {
        name: 'View Bookings',
        url : '/view',
        controller : 'bookingCtrl',
        templateUrl : 'app/templates/viewBookings.html'
    };
    
    
    $stateProvider.state(home);
    $stateProvider.state(book);
    $stateProvider.state(add);
    $stateProvider.state(edit);
    $stateProvider.state(reviews);
    $stateProvider.state(view);
    $urlRouterProvider.otherwise("/");
})