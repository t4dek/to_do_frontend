angular.module('toDoApp')
  .factory('ToDo',['$http', function($http){
    return {
      allLists: function(){
        return $http({method: "GET", url: "http://localhost:3000/lists"})
      },
      listTasks: function(listId){
        return $http({method: "GET", url: "http://localhost:3000/lists/" + listId + "/tasks"})
      }
    }
  }])
