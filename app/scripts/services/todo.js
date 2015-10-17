'use strict';

angular.module('toDoApp')
  .factory('ToDo',['$http', function($http){
    return {
      allLists: function(){
        return $http.get("http://localhost:3000/lists");
      },
      listTasks: function(listId){
        return $http.get("http://localhost:3000/lists/" + listId + "/tasks");
      },
      createList: function(params){
        return $http.post("http://localhost:3000/lists", params);
      },
      editList: function(params){
        return $http.put("http://localhost:3000/lists/" + params.id, params)
      },
      createTask: function(listId, params){
        return $http.post("http://localhost:3000/lists/" + listId + "/tasks", params)
      }
    };
  }]);
