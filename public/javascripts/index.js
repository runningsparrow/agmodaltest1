'use strict';

var modalapp = angular.module('modalApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'moduleDirectivecontroller',
]);

modalapp
    .config(['$routeProvider',function($routeProvider){

        $routeProvider
            .when('/modal1',{
                templateUrl:'../templates/modal1.html',
                controller:'modal1controller',
            })
            .when('/modal2',{
                templateUrl:'../templates/modal2.html',
                controller:'modal2controller',
            })
            .when('/modal3',{
                templateUrl:'../templates/modal3.html',
                controller:'modal3controller',
            })
            .when('/directive1',{
                templateUrl:'../templates/testdirective1.html',
                controller:'Directivecontroller',
            }).
            otherwise('/');
        console.log('log modalapp')
    }])