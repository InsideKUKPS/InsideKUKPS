var obj = [
    {name:"คณะเกษตร",category:"Building",lat:14.024165,lng:99.973146},
    {name:"คณะศิลปศาสตร์และวิทยาศาสตร์",category:"Building",lat:14.024491,lng:99.976850},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
    {name:"",category:"",lat:14,lng:99},
];
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.r = obj ;
})