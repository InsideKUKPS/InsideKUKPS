obj = [
    //เกษตร
     {name:"คณะเกษตร",category:"education",lat:14.024165,lng:99.973146},
     {name:"คณะเกษตร",category:"education",lat:14.024165,lng:99.973146},
     //ศวท
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 14]",category:"education",lat:14.025943,lng:99.977739},
     {name:"อาคารการเรียนรู้ทางภาษา",category:"education",lat:14.024732,lng:99.978838},
     {name:"อาคารการเรียนรู้ทางเทคโนโลยีสารสนเทศ",category:"education",lat:14.024410,lng:99.978788},
     {name:"อาคารบัณฑิตศึกษา",category:"education",lat:14.025593,lng:99.977521},
     {name:"อาคารศูนย์การศึกษาอุตสาหกรรมบริการนานาชาติ",category:"education",lat:14.026774,lng:99.975687},
     {name:"อาคารศูนย์อุตสาหกรรมบริการและนวัตกรรมภาษา",category:"education",lat:14.025647,lng:99.976591},
     {name:"อาคารกิจกรรนิสิตคณะ ศวท.",category:"education",lat:14.024547,lng:99.976400},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 1]",category:"education",lat:14.024228,lng:99.976442},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 2]",category:"education",lat:14.024574,lng:99.976703},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 3]",category:"education",lat:14.024499,lng:99.977323},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 4]",category:"education",lat:14.024107,lng:99.976980},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 5]",category:"education",lat:14.025311,lng:99.977087},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 6]",category:"education",lat:14.024815,lng:99.976800},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 7]",category:"education",lat:14.024958,lng:99.976910},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 8]",category:"education",lat:14.025085,lng:99.976905},
     {name:"ตึกปฏิบัติการทางวิทยาศาสตร์ [SC 9]",category:"education",lat:14.024490,lng:99.978268},
  //
     {name:"สำนักหอสมุดกำแพงแสน",category:"education",lat:14.025348,lng:99.974515},   
     {name:"โรงอาหารกลาง 1",category:"food",lat:14.022076,lng:99.976481},
     {name:"ศูนย์อาหาร อาคารศูยน์มหาวิทยาลัย",category:"food",lat:14.022974,lng:99.976501},
     {name:"นนทรี ฟู๊ดเซ็นเตอร์ [โรงส้ม]",category:"food",lat:14.027670,lng:99.978633},
     {name:"ป้าสำราญ แคนตั๊กกี้",category:"food",lat:14.021844,lng:99.983099},
     {name:"ชาพะยอม",category:"food",lat:14.020984,lng:99.989773},
     {name:"",category:"hospital",lat:14,lng:99},
     {name:"สวน 72 พรรษา มหาราชนี",category:"attractions",lat:14.026756,lng:99.977176},
     {name:"สนามฟุตบอล",category:"sport",lat:14.021390,lng:99.984359},
     {name:"7-11 สาขาหอพัก 2",category:"market",lat:14.026220,lng:99.983096},
     {name:"7-11 สาขาหอพัก 1",category:"market",lat:14.027359,lng:99.979698},
     {name:"7-11 สาขากองบริหารวิชาการและนิสิต",category:"market",lat:14.021791,lng:99.977424},
     {name:"สหกรณ์ร้านค้า",category:"market",lat:14.021462,lng:99.977384},
     {name:"สหกรณ์ร้านค้า สาขาหอพัก",category:"market",lat:14.027385,lng:99.979620},
     {name:"",category:"dorm",lat:14,lng:99},
 ];
 angular.module('myApp', []).controller('namesCtrl', function($scope) {
     $scope.Obj = obj;
 });