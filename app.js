// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.send('Hello world')
// });

// app.listen(8000);

var express = require('express');
var app = express();


app.get('/greeting', (req, res) => {


    let greetText = req.query.str1 + " " + req.query.str2
    res.send(`<html><h1 style="align:center;">${greetText}</h1></body></html>`)  //การส่งค่าขึ้น srever
    
})


app.listen(8000);