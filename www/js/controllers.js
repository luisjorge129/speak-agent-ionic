api_url = 'https://speakagentchallenge.herokuapp.com/api/students/'

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('StudentsCtrl', function($scope, Chats, $http) {
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
