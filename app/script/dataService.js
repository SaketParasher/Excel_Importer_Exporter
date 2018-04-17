
excelApp.factory('excelAppService',function($resource){

    return{
        saveData:function(data){
            
            return $resource('/savedata').save(data);
        }
    }

});