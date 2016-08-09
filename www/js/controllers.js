api_url = 'https://speakagentchallenge.herokuapp.com/api/students/'

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('StudentsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.students = [];

  $scope.getStudents = function(){
    var url = api_url
      $http({url:url})
      .success(function(data){
        $scope.students = data;
      })
  }

  $scope.getStudents();
})

.controller('StudentDetailCtrl', function($scope, $stateParams, $http) {
  var studentId = $stateParams.studentId;

  var url = api_url + studentId;

  $http({url:url})
  .success(function(data){
    $scope.student = data;
  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
