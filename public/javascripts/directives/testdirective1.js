'use strict';



angular.module('modalApp').directive('testdirective', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            title: '=testdirectiveTitle'
        },
        template: '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link: function (scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});


angular.module('modalApp').directive('attrsdirective', function () {
    return {
        link: function (scope, elements, attrs, controller) {
            elements[0].onkeyup = function () { //从元素列表中获取元素，并绑定相应的事件
                //下面的意思是，如果输入10以内的数，则输入框边框颜色不变，否则变为红色
                if (isNaN(this.value) || this.value < 1 || this.value > 10) {
                    this.style.borderColor = 'red';
                }
                else {
                    this.style.borderColor = '';
                }
            };
        }
    }
});


angular.module('modalApp').directive('accordion', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function () { //声明一个内部的controller，用于传递值和方法
            var expanders = [];
            this.gotOpened = function (selectedExpander) {
                //angularJS的forEach用法
                /*var objs =[{a:1},{a:2}];
                 angular.forEach(objs, function(data,index,array){
                 //data等价于array[index]
                 console.log(data.a+'='+array[index].a);
                 });
                 参数如下：
                 objs：需要遍历的集合
                 data:遍历时当前的数据
                 index:遍历时当前索引
                 array:需要遍历的集合，每次遍历时都会把objs原样的传一次。
                * */
                angular.forEach(expanders, function (expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            }

            this.addExpander = function (expander) {
                expanders.push(expander);
            }
        }
    }
});

angular.module('modalApp').directive('expander', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',//意思是将accordion的控制器传到指令中，从而在下方使用它的函数 ^的意思是需要遍历dom树，？的意思是找不到不报错
        scope: {
            title: '=expanderTitle'
        },
        template: '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link: function (scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);

            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
        }
    }
});

