var todoApp = angular.module('todoApp', []);

// var model = [
//   {task: 'test', status: true},
//   {task: 'test1', status: false}
// ];
if(localStorage.tasks){
  var model = angular.fromJson(localStorage.tasks);
}else {
  var model = [];
}



todoApp.controller('ListCtrl', function ($scope){
  $scope.items = model;

  $scope.addTask = function () {
    model.push({task: $scope.newTask, status: false});
    $scope.newTask = '';
    $scope.saveStorage();
  }

  $scope.saveStorage = function(){
    localStorage.tasks = angular.toJson(model);
  }

  $scope.newTask = '';

});
