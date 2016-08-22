var app = angular.module('swiftCodeApp',['ngRoute','ngCookies']);
var URL = "http://betsol.org:9000/";

//Routing

app.config(function ($routeProvider) {
$routeProvider
.when('/',{
  redirectTo : '/login'
})
.when('/login',{
  templateUrl : 'views/login.html',
  controller : 'loginCtrl'
  })
  .when('/signup',{
    templateUrl : 'views/signup.html',
    controller : 'signupCtrl'
  })
    .when('/dashboard',{
      templateUrl : 'views/dashboard.html',
      controller : 'dashboardCtrl'
      })
      .otherwise({
        redirectTo : '/'
      });
});
//Signup controller
app.controller('signupCtrl',['$scope','$location','$http',function($scope,$location,$http){
this.signupData = {};
$scope.signup = function(){
var request = $http({
  method : 'POST',
  url : URL + "signup",
  data : this.signupData
});
request.success(function(data){
  var response = angular.fromJson(data);
  console.log(response);
});
request.error(function(data){
  console.log(data);
});
}
}]);
app.controller('loginCtrl',['$scope','$location','$http',function($scope,$location,$http){

}]);
