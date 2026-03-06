console.log("Hello node js");
let fss  = require('fs');
fss.writeFile("output.txt","hello output",(err)=>{
  if(err){
    console.log("Error is there")
  }
  else{
    console.log("File is cretaed");
  }
})
