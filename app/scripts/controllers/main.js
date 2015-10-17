'use strict';

angular.module('toDoApp')
  .controller('MainCtrl',['$scope', 'ToDo', function ($scope, ToDo) {
    
    $scope.new = false;
    $scope.showEdit = false;
    $scope.errors = [];
    $scope.lists = [];
    $scope.tasks = [];
    $scope.currentList;
    
    _retrieveLists();
    
    $scope.showTasks = function(listId){
      $scope.currentList = listId;
      _retrieveTasks(listId);
    };
    
    $scope.addList = function(params){
      if (params.title){
        ToDo.createList(params).then(function() {
          _retrieveLists();
        })
      } else {
          $scope.errors.push("Enter a name of a list first!");
      }
    };
    
    $scope.addTask = function(params){
      if (params.title){
        ToDo.createTask(params.list_id, params).then(function(){
          _retrieveTasks(params.list_id);
        })
      } else {
        $scope.errors.push("Enter a name of a task first!")
      }
    }
    
    $scope.editList = function(params){
      if (params.title){
        ToDo.editList(params);
        _retrieveTasks(params.list_id);
      } else {
        $scope.errors.push("Your list should have a name!");
      }
    };
    
    $scope.makeEditable = function(list){
      list.editable = true;
    }
    
    function _retrieveLists(){
      ToDo.allLists().then(function(response){
        $scope.lists = response.data;
      });
    }
    
    function _retrieveTasks(listId){
      ToDo.listTasks(listId).then(function(response){
        $scope.tasks = response.data;
      });
    }
  }]);
