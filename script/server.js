var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');

var appjs = require('./app.js');

var app = new express();
var rootPath = path.normalize(__dirname+'/../');
app.use(express.static(rootPath+'/app'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/fakedata',appjs.generateFakeData);

app.post('/savedata',appjs.saveToExcel);

/*var saveMethod = function(req,res){
    var data = req.body;
    console.log(data);
}*/

app.listen(3000,()=>console.log('Navigate to localhost:3000 in chrome'));
