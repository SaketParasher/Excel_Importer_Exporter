
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
    //console.log(data);
    res.send();
};