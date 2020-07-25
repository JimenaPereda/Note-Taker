
var express = require('express');
var path = require('path');
var htmlRout = require('./Routing/htmlrout.js')
var apiRouts = require('./Routing/apirouts.js')


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(express.static("Develop/public"));
app.use("/api", apiRouts);
app.use("/", htmlRout);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})