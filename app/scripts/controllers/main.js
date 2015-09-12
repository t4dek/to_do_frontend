'use strict';

angular.module('toDoApp')
  .controller('MainCtrl',['$scope', 'ToDo', function ($scope, ToDo) {
    
    $scope.errors = [];
    $scope.new = false;
    $scope.lists = [];
    $scope.tasks = [];
    
    function retrieveLists(){
      ToDo.allLists().then(function(response){
        $scope.lists = response.data;
      });
    }
    
    retrieveLists();
    
    $scope.showTasks = function(listId){
      ToDo.listTasks(listId).then(function(response){
        $scope.tasks = response.data;
      });
    };
    
    $scope.addList = function(title){
      if (title){
        ToDo.createList(title);
        retrieveLists();
        console.log($scope.lists);
      } else {
          $scope.errors.push("Enter a name of a list first!");
      }
    };
  }]);
