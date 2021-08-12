const fs = require('fs');





 fs.readdirSync('test').forEach((arg) => {
    let filesName = arg;
    //console.log(filesName);
    let ext = filesName.substring(filesName.lastIndexOf('.') - 5);
    //console.log(ext);
    if(ext === ".test.js"){
        console.log(filesName);
        
        //let readfile = fs.readFileSync(filesName);
        //console.log(readfile);
    }
 });
