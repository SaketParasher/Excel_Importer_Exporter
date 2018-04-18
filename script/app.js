
var faker = require('faker');
var excel = require('excel4node');

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
    for(var prop in data){
        console.log(typeof data[prop] +'  '+data[prop]);
    }
var xl = require('excel4node');
 
// Create a new instance of a Workbook class
var wb = new xl.Workbook();
 
// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');
//var ws2 = wb.addWorksheet('Sheet 2');
 
// Create a reusable style
var style = wb.createStyle({
    font: {
        color: '#000000',
        size: 12
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -'
});
 
// Set value of cell A1 to 100 as a number type styled with paramaters of style
    ws.cell(1,1).string('Reservation ID').style(style);
    ws.cell(1,2).string('Name').style(style);
    ws.cell(1,3).string('Email').style(style);
    ws.cell(1,4).string('Contact').style(style);
    ws.cell(1,5).string('Gender').style(style);
    ws.cell(1,6).string('Message').style(style);
    ws.cell(1,7).string('Send Mails').style(style);
    ws.cell(1,8).string('Prime Member').style(style);
 
    ws.cell(2,1).string(data.rid).style(style);
    ws.cell(2,2).string(data.name).style(style);
    ws.cell(2,3).string(data.email).style(style);
    ws.cell(2,4).string(data.contact).style(style);
    ws.cell(2,5).string(data.gender).style(style);
    ws.cell(2,6).string(data.message).style(style);
    ws.cell(2,7).bool(Boolean(data.mailOffers)).style(style);
    ws.cell(2,8).bool(Boolean(data.primeMember)).style(style);
    
    console.log(xl.getExcelAlpha(10));
 
    
wb.write('Excel.xlsx');
res.send();
};