var fs = require('fs');
var faker = require('faker');
var excel = require('excel4node');
var excelRead = require('excel').default;
var xlsx = require('node-xlsx');
var xl = require('excel4node');

var Excel = require('exceljs');

module.exports.generateFakeData = function(req,res){
    
    var fakeData = {};
    //fakeData.rid = faker.random.alphaNumeric(10);

    /*console.log('rid :- '+faker.random.alphaNumeric(10));
    console.log('name :- '+faker.name.findName());
    console.log('email :- '+faker.internet.email());
    console.log('contact :- '+faker.phone.phoneNumber());
    console.log('gender :- '+faker.random.alphaNumeric());
    console.log('message :- '+faker.lorem.lines());
    console.log('mailOffers :- '+faker.random.boolean());
    console.log('primeMember :- '+faker.random.boolean());
    */
    
    fakeData.rid = faker.random.alphaNumeric(10);
    fakeData.name = faker.name.findName();
    fakeData.email = faker.internet.email();
    fakeData.contact = faker.phone.phoneNumber();
    //console.log('phone :- '+faker.phone.phoneNumberFormat());
    fakeData.gender = 'Others';
    fakeData.message = faker.lorem.lines();
    fakeData.mailOffers = faker.random.boolean();
    fakeData.primeMember = faker.random.boolean();
    
    
    res.setHeader('Content-Type','application/json');
    res.send(fakeData);
    res.end();
};

module.exports.saveToExcel  = function(req,res){
var data = req.body;
    

      
     // var sheet = workbook.addWorksheet('My Sheet');   
 
/*if (!fs.existsSync(__dirname+'/exex.xlsx')) {
      console.log('true');
      var sheet = workbook.addWorksheet('My Sheet');   
  }*/
//workbook.eachSheet(function(worksheet, sheetId) {
    
//});
    
    if(!global['workbook']){
        console.log('In Workbook');
      var workbook = new Excel.Workbook();  
        global['workbook']=workbook;
    }else{
        workbook = global['workbook'];
    }
    
    if(!global['sheet']){
      var sheet = workbook.addWorksheet('My Sheet');
        global['sheet'] = sheet;
    }else{
        sheet = global['sheet'];
    }
    
    if(!global['worksheet']){
      var worksheet = workbook.getWorksheet('My Sheet');
       worksheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 32 },
            { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
        ];
        global['worksheet'] = worksheet;
    }else{
        worksheet = global['worksheet'];
    }
    
//var worksheet = workbook.getWorksheet('My Sheet');
    /*
    worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
];
    */

  /*  
worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
worksheet.addRow([3, 'Sam', new Date()]);
worksheet.addRow({id: 4, name: 'Don Jon', dob: new Date()});
    worksheet.addRow({id: 5, name: 'Don Jon', dob: new Date()});
*/    
    worksheet.addRow({id: data.rid, name: data.name, DOB: data.gender});
    
    workbook.xlsx.writeFile(__dirname+'/exex.xlsx')
    .then(function() {
        console.log('Data Added to Sheet');
    });

    

res.send();
};

