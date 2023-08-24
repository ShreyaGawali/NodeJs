//create a new File

const fs=require("fs");

fs.open("NewFile.txt",'w',function(err,file){
    if(err) throw err;
    console.log('Saved!');

});