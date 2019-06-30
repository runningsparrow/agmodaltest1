'use strict';

angular.module('moduleDirectivecontroller', [])
    .controller('Directivecontroller', function ($scope) {
        $scope.title = '点击展开';
        $scope.text = '这里是内部的内容。';

        $scope.expanders = [
            {title: 'click me', text: 'one click'},
            {title: 'click me two', text: 'two click'},
            {title: 'click me three', text: 'three click'}];

    })

    // .controller('SomeController', function ($scope) {
    //     $scope.expanders = [
    //         {title: 'click me', text: 'one click'},
    //         {title: 'click me two', text: 'two click'},
    //         {title: 'click me three', text: 'three click'}];
    // });
