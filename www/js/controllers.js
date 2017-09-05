angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation) {
  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

  $scope.brpkyName = "Blue Ridge Parkway";
  $scope.brpkyDesc = "The Blue Ridge Parkway is a National Parkway and All-American Road in the United States, noted for its scenic beauty.";
  $scope.brpkyPic = "./img/brpkwy.jpg";

})

.controller('ChatsCtrl', function($scope) {
  $scope.ntpkyName = "Natchez Trace Parkway";
  $scope.ntpkyDesc = "The Natchez Trace Parkway (also known as the Natchez Trace or simply the Trace) is a National Parkway in the southeastern United States that commemorates the historic Old Natchez Trace and preserves sections of the original trail.";
  $scope.ntpkwyPic = "./img/Natchez_Trace_Parkway_Bridge.jpg";
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
