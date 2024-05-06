const generator = require("generate-password");

const password = generator.generateMultiple(5,{
    length:15,
    numbers:true,
    symbols:true,
});
console.log(password);