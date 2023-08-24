// Write a text into the file.

var fs=require("fs");
fs.writeFile("NewFile.txt","Hi Students Lets Start NodeJs",function(err){
    if(err) throw err;
    console.log('saved');

});