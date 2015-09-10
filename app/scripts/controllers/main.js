'use strict';

angular.module('toDoApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.lists = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.new = false;
  }]);
