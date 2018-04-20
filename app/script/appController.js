excelApp.controller('appController',function($scope,excelAppService){

    $scope.data = {gender:'Female'};
    //$scope.data.offersMail = $scope.check;
    
    $scope.check = false;
    $scope.chkRad = false;
    
    $scope.checkMethod = function(){
        
        var chk = document.getElementById('chkbox');
        console.log($scope.check);
        //$scope.check == false ? $scope.check = true : $scope.check = false
        //$scope.check = !$scope.check;
        if($scope.check == false){
            $scope.check = true;
            $scope.data.offersMail = true;
            chk.setAttribute('checked','checked');
        }else{
            $scope.check = false;
            $scope.data.offersMail = false;
            chk.removeAttribute('checked');
        }
    };
    
    $scope.checkMethodInp = function(){
        
        var chk = document.getElementById('chkbox');
     
        if($scope.check == true){
            chk.setAttribute('checked','checked');
            //$scope.data.primeUser = true;
        }else{
            chk.removeAttribute('checked');
            //$scope.data.primeUser = false;
        }
    };
    
    $scope.checkRadio = function(){
        var yesRad = document.getElementById('yesradio');
        var noRad = document.getElementById('noradio');
        
        
        if($scope.chkRad == true){
            yesRad.checked = true;
            //$scope.data.primeUser = true;
        }else{
            noRad.checked = true;
            //$scope.data.primeUser = false;
        }  
    }
    
    $scope.setRadioTrue = function(){
        var yesRad2 = document.getElementById('yesradio');
        
            yesRad2.checked = true;
            $scope.data.primeUser = true;
    }
    
    $scope.setRadioFalse = function(){
           var noRad2 = document.getElementById('noradio');
        
            noRad2.checked = true;
            $scope.data.primeUser = false;
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
                $scope.checkMethodInp();
                
                $scope.chkRad = response.primeMember;
                $scope.checkRadio();
            },
            function(response){console.log('Failure',response)}
        );
    }
    
    $scope.saveData = function(data){
        
        console.log(data);
        excelAppService.saveData(data)
        .$promise.then(
            function(response){console.log('Success',response)},
            function(response){console.log('Failure',response)}
        );

    }
});