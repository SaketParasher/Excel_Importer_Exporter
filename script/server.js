var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var excel = require('excel4node');

var app = new express();
var rootPath = path.normalize(__dirname+'/../');
app.use(express.static(rootPath+'/app'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/savedata',function(req,res){
    var data = req.body;
    console.log(req.body);
    res.send(data);
});

/*var saveMethod = function(req,res){
    var data = req.body;
    console.log(data);
}*/

app.listen(3000,()=>console.log('App listening at 3000'));
