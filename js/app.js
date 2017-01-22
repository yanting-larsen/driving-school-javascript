'use strict';

var app = angular.module('drivingSchool', [
  'ngRoute',
  'navigation',
  'contactForm',
  'pageControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/welcome', {
    templateUrl: 'partials/index.html'
  }).
  when('/education', {
    templateUrl: 'partials/education.html'
  }).
  when('/price', {
    templateUrl: 'partials/price.html'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutController'
  }).
  when('/booking', {
    templateUrl: 'partials/booking.html',
    controller: 'BookingController'
  }).
  when('/contact', {
    templateUrl: 'partials/contact.html'
  }).
  otherwise({redirectTo: '/welcome'});
}]);
