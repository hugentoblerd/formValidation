var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {

  // initially hide login and signup forms
    $scope.loginFormHide = true;
    $scope.signupFormHide = true;

  // toggles the login form
  $scope.toggleLogin = function () {
    $scope.loginFormHide = !$scope.loginFormHide;
    $scope.signupFormHide = true;
  };

  // toggles the signup form
  $scope.toggleSignup = function () {
    $scope.signupFormHide = !$scope.signupFormHide;
    $scope.loginFormHide = true;
  };







});




