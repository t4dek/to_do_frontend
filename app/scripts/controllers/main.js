'use strict';

angular.module('toDoApp')
  .controller('MainCtrl',['$scope', 'ToDo', function ($scope, ToDo) {
    
    $scope.errors = [];
    $scope.new = false;
    $scope.lists = [];
    $scope.tasks = [];
    
    ToDo.allLists().then(function(response){
      $scope.lists = response.data;
    })
    
    $scope.showTasks = function(listId){
      ToDo.listTasks(listId).then(function(response){
        $scope.tasks = response.data;
      })
    }
    
    $scope.addList = function(list){
      if (list){
        $scope.lists.push(list);
      } else {
          $scope.errors.push("Enter a name of a list first!");
      }
    }
  }]);
