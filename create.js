const fs = require("fs")
const path = require ("path")
const fielPath = path.resolve("assets", "welcome.txt");
fs.writeFileSync(fielPath,"Hello node",{encoding:"utf-8"});
const data = fs.readFileSync(filePath,"utf-8");
console.log(data);