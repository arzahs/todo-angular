var todoApp = angular.module('todoApp', []);

var model = [
  {task: 'test', status: true},
  {task: 'test1', status: false}
];

todoApp.controller('ListCtrl', function ($scope){
  $scope.items = model;

  $scope.addTask = function () {
    model.push({task: $scope.newTask, status: false});
    $scope.newTask = '';
  }

  $scope.newTask = '';

});
