var app = angular.module('my_app',['ngRoute']);

app.controller('controls',function($scope) {

});



app.config(function($routeProvider) {
	$routeProvider.when('/home',{
		templateUrl:'home.html',
	    controller:'homecontrol'
	}).when('/about',{
        templateUrl:'about.html',
	    controller:'aboutcontrol'
	}).when('/services',{
        templateUrl:'services.html',
	    controller:'servicscontrol'
	}).otherwise({
        redirectTo:'/home'
	})

});


app.controller('homecontrol',function($scope) {
    $scope.message = 'This is Home page';
    $scope.home="hey";
});
app.controller('aboutcontrol',function($scope) {
	$scope.message = 'This is About page';
	var data = [
    {about:'php'},
    {about:'javaScript'},
    {about:'java'}
	];
	$scope.data = data; 
});
app.controller('servicscontrol',function($scope,$http) {
	$scope.message = 'This is Services page';
	$http({
		method:'POST',
		url:'index.php'
	}).then(function(data) {
		$scope.out = data;
	})

});




