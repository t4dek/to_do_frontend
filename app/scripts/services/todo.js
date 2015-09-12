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
      createList: function(title){
        return $http.post("http://localhost:3000/lists", {title: title});
      }
    };
  }]);
