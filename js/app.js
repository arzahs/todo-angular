var todoApp = angular.module('todoApp', []);

var model = [
  {task: 'test', status: false},
  {task: 'test1', status: false}
];

todoApp.controller('ListCtrl', function ($scope){
  $scope.items = model;

});
