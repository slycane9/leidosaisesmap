
const https = require('https');

const  express = require("express");

const neatCsv = require('neat-csv');
//This is needed for CSV parser
const fs = require('fs')

const app = express();

fs.readFile('./DataSet/BroadBandTechCleaned3.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  file = await neatCsv(data)
  //reads as array
  // console.log(file[0]["TribalName"])
  console.log(file instanceof Array);
  console.log(typeof file[0]);
  var cur = file;
  console.log(cur);
//formatted as a JavaScript array of objects.
var myJsonString = JSON.stringify(file);

});


app.use(express.static("Public"));
// This serves all the static files in the Public folder

app.use('/node_modules', express.static(__dirname + '/node_modules'));
// This servers all the node_modules in the main directory

app.listen(3000, function(){
  console.log("server is running on 3000");
});
