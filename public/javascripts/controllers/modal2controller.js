'use strict';

modalapp
    .controller('modal2controller', function ($scope, $uibModal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];
    
        $scope.open = function (size) {
            var modalInstance = $uibModal.open({
                templateUrl: 'modal2.html',
                controller: 'Modal2InstanceCtrl',
                backdrop: "static",
                size: size,
                resolve: {
                    items1: function () {
                        return $scope.items;
                    }
                }
            });
    
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    
    });

    //$uibModalInstance是模态窗口的实例  
modalapp
    .controller('Modal2InstanceCtrl', function ($scope, $uibModalInstance, items1) {
        $scope.items = items1;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });