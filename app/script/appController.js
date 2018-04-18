excelApp.controller('appController',function($scope,excelAppService){

    $scope.data = {gender:'Female'};
    
    $scope.check = false;
    $scope.chkRad = false;
    
    $scope.checkMethod = function(){
        
        var chk = document.getElementById('chkbox');
        console.log($scope.check);
        //$scope.check == false ? $scope.check = true : $scope.check = false
        //$scope.check = !$scope.check;
        if($scope.check == false){
            $scope.check = true;
            chk.setAttribute('checked','checked');
        }else{
            $scope.check = false;
            chk.removeAttribute('checked');
        }
    }
    
    $scope.checkRadio = function(){
        var yesRad = document.getElementById('yesradio');
        var noRad = document.getElementById('noradio');
        
        
        if($scope.chkRad == true){
            yesRad.checked = true;
        }else{
            noRad.checked = true;
        }
        
    }
    
    
    $scope.fillForm = function(){
        excelAppService.generateFakeData()
        .$promise.then(
            function(response){
                //console.log('Success',response);
                $scope.data.rid = response.rid;
                $scope.data.name = response.name;
                $scope.data.email = response.email;
                $scope.data.contact = response.contact;
                $scope.data.gender = response.gender;
                $scope.data.message = response.message;
                $scope.data.offersMail = response.mailOffers;
                $scope.data.primeUser = response.primeMember;
                
                $scope.check = response.mailOffers;
                $scope.checkMethod();
                
                $scope.chkRad = response.primeMember;
                $scope.checkRadio();
            },
            function(response){console.log('Failure',response)}
        );
    }
    
    $scope.saveData = function(data){
        //console.log(data);
        //console.log(form);

        excelAppService.saveData(data)
        .$promise.then(
            function(response){console.log('Success',response)},
            function(response){console.log('Failure',response)}
        );

    }
});