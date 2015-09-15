'use strict';

angular.module('toDoApp')
  .factory('ToDo',['$http', function($http){
    return {
      allLists: function(){
        console.log("HERE");
        return $http.get("http://localhost:3000/lists");
      },
      listTasks: function(listId){
        return $http.get("http://localhost:3000/lists/" + listId + "/tasks");
      },
      createList: function(title){
        console.log(title);
        return $http.post("http://localhost:3000/lists", {title});
      },
      editList: function(listId, params){
        return $http.put("http://localhost:3000/lists/" + listId, params)
      }
    };
  }]);
