const fs = require('fs');

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