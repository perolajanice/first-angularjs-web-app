// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module("scotchApp",['ngRoute']);   //scotchApp is linked to main html tag

    // configure our routes
   scotchApp.config(function($routeProvider) {
       $routeProvider

           // route for the home page
           .when('/', {
               templateUrl : 'home.html',
               controller  : 'mainController'
           })

           // route for the about page
           .when('/about', {
               templateUrl : 'about.html',
               controller  : 'aboutController'
           })

           // route for the contact page
           .when('/contact', {
               templateUrl : 'contact.html',
               controller  : 'contactController'
           });
   });


    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

      $scope.images = [
        {
          url: 'img1.jpg'
        },
        {
          url: 'img2.jpg'
        },
        {
          url: 'img3.jpg'
        },
        {
          url: 'img4.jpg'
        }
      ];




      $scope.title = 'An Example!'

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
    scotchApp.controller('aboutController', function($scope) {
          $scope.message = 'Look! I am an about page.';
      });

      scotchApp.controller('contactController', function($scope) {
          $scope.message = 'Contact us! JK. This is just a demo.';
      });
