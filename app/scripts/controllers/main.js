'use strict';

angular.module('toDoApp')
  .controller('MainCtrl',['$scope', 'ToDo', function ($scope, ToDo) {
    
    $scope.new = false;
    $scope.showEdit = false;
    $scope.errors = [];
    $scope.lists = [];
    $scope.tasks = [];
    $scope.currentList;
    
    retrieveLists();
    
    $scope.showTasks = function(listId){
      $scope.currentList = listId;
      retrieveTasks(listId);
    };
    
    $scope.addList = function(params){
      if (params.title){
        ToDo.createList(params).then(function() {
          retrieveLists();
        })
      } else {
          $scope.errors.push("Enter a name of a list first!");
      }
    };
    
    $scope.addTask = function(params){
      if (params.title){
        ToDo.createTask(params.list_id, params).then(function(){
          retrieveTasks(params.list_id);
        })
      } else {
        $scope.errors.push("Enter a name of a task first!")
      }
    }
    
    $scope.editList = function(id, title){
      if (title){
        ToDo.editList(id, {title: title})
      } else {
        $scope.errors.push("Your list should have a name!");
      }
    };
    
    $scope.makeEditable = function(list){
      list.editable = true;
      
    }
    
    function retrieveLists(){
      ToDo.allLists().then(function(response){
        $scope.lists = response.data;
      });
    }
    
    function retrieveTasks(listId){
      ToDo.listTasks(listId).then(function(response){
        $scope.tasks = response.data;
      });
    }
  }]);
