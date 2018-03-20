obj = [
    {name:"คณะเกษตร",category:"education",lat:14.024165,lng:99.973146},
    {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 14]",category:"education",lat:14.025943,lng:99.977739},
    {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 9]",category:"education",lat:14.024490,lng:99.978268},
    {name:"",category:"education",lat:14,lng:99},
    {name:"",category:"education",lat:14,lng:99},
    {name:"",category:"food",lat:14,lng:99},
    {name:"",category:"food",lat:14,lng:99},
    {name:"",category:"food",lat:14,lng:99},
    {name:"",category:"hospital",lat:14,lng:99},
    {name:"",category:"attractions",lat:14.016002,lng:99.970582},
    {name:"สนามฟุตบอล",category:"sport",lat:14.021390,lng:99.984359},
    {name:"7-11",category:"market",lat:14.021865,lng:99.977383},
    {name:"",category:"dorm",lat:14,lng:99},
];
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.Obj = obj;
});