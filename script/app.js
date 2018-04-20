var fs = require('fs');
var faker = require('faker');
var excel = require('excel4node');
var excelRead = require('excel').default;
var xlsx = require('node-xlsx');
var xl = require('excel4node');

var Excel = require('exceljs');
var rn = require('random-number');

var options2 = {
        min:  1,
        max: 9,
        integer: true
    };

module.exports.generateFakeData = function(req,res){
    
    var fakeData = {};
    
    var options = {
        min:  100000,
        max: 999999,
        integer: true
    };
    
    fakeData.rid = rn(options);
    fakeData.name = faker.name.findName();
    fakeData.email = faker.internet.email();
    fakeData.contact = faker.phone.phoneNumber();
    fakeData.gender = 'Others';
    fakeData.message = faker.lorem.lines();
    fakeData.mailOffers = faker.random.boolean();
    fakeData.primeMember = faker.random.boolean();
    
    
    res.setHeader('Content-Type','application/json');
    res.send(fakeData);
    res.end();
};

function getDate(){
    var dte = new Date();
    var str = '';
    var date = dte.getDate()<10 ?'0'+dte.getDate():dte.getDate();
    var month = (dte.getMonth())+1<10 ?'0'+(dte.getMonth()+1):(dte.getMonth()+1);
    var year = dte.getFullYear();
    var hh = dte.getHours()<10?'0'+dte.getHours():dte.getHours();
    var mm = dte.getMinutes()<10?'0'+dte.getMinutes():dte.getMinutes();
    var ss = dte.getSeconds()<10?'0'+dte.getSeconds():dte.getSeconds();
    str = str+date+month+year+hh+mm+ss;
    return str;
}

module.exports.saveToExcel  = function(req,res){
    
    var data = req.body;
    var workbook = new Excel.Workbook(); 
      
    var sheet = workbook.addWorksheet('My Sheet');
   
    var worksheet = workbook.getWorksheet('My Sheet');
       worksheet.columns = [
            
           { header: 'Name', key: 'name'},
           { header: 'Reservation Id', key: 'rid'},
           { header: 'Email', key: 'email'},
           { header: 'Contact', key: 'contact' },
           { header: 'Gender', key: 'gender'},
           { header: 'Message', key: 'message'},
           { header: 'Mail', key: 'mail'},
           { header: 'PrimeMember', key: 'prime'},
        ];
         worksheet.columns.forEach(column => {
            column.width = column.header.length < 25 ? 25 : column.header.length
        });
        
        worksheet.properties.outlineLevelCol = 2;
        worksheet.properties.defaultRowHeight = 25;
        
    
   
        var reserId = String(data.rid);
        var origrid='';
        for(var i=0;i<reserId.length;i++){
            if(reserId[i].charCodeAt(0) > 47 && reserId[i].charCodeAt(0) < 58){
                origrid = origrid+reserId[i];
            }else
                {
                    origrid = origrid+String(rn(options2));
                }
        }
    
        var fileName = origrid+getDate();
        
        console.log(data);
        console.log(data.mailOffers);
        console.log(typeof data.mailOffers);
        //console.log(Boolean(data.mailOffers));
        console.log(data.primeMember);
        //console.log(Boolean(data.primeMember));
    
       
        worksheet.addRow({ rid:origrid,name: data.name, email: data.email,contact:data.contact, gender:data.gender, message:data.message, mail:data.offersMail,prime:data.primeUser});

        workbook.xlsx.writeFile(__dirname+'/'+fileName+'.xlsx')
        .then(function() {
            console.log('Data Added to Sheet');
        });

    
    res.send();
};

