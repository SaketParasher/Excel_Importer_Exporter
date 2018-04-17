excelApp.controller('appController',function($scope,excelAppService){

    $scope.data = {};
    $scope.saveData = function(data,form){
        console.log(data);
        console.log(form);

        excelAppService.saveData(data)
        .$promise.then(
            function(response){console.log('Success',response)},
            function(response){console.log('Failure',response)}
        );

    }
});