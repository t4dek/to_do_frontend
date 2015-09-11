'use strict';

angular.module('toDoApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.lists = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.errors = [];
    
    $scope.new = false;
    
    $scope.tasks = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.addList = function(list){
      if (list){
        $scope.lists.push(list);
      } else {
          $scope.errors.push("Enter a name of a list first!");
      }
    }
  }]);
