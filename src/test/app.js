const fs = require('fs');





//  fs.readdirSync('test').forEach((arg) => {
//     let filesName = arg;
//     let ext = filesName.substring(filesName.lastIndexOf('.') - 5);
//     if(ext === ".test.js"){
//         console.log(filesName);

//         //let readfile = fs.readFileSync(filesName);
//         //console.log(readfile);
//     }
//  });
// console.log(eval('2+2'));


// const data = fs.readFileSync('test/1.test.js', 'utf-8')

// console.log(eval(data));


// let allFiles = fs.readdirSync('test');

// allFiles.forEach(x => {
//    let ext = x.substring(x.lastIndexOf('.') - 5);
//    if (ext === ".test.js") {
//       console.log(x);
//    }

// });





// console.log(allFiles);

let components = fs.readdirSync("./test/");
components.forEach((element) => {
   let ext = element.substring(element.lastIndexOf('.') - 5);
   if (ext === ".test.js") {
      fs.readFile(`./test/${element}`, "utf-8", (err, data) => {
         console.log(eval(data));
      });
   }

});