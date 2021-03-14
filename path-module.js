// Path Moduling in NodeJS

const path = require("path");

file = path.basename("Tutorial/test.json");
file2 = path.dirname("Tutorial/test.json");
file3 = path.isAbsolute("C:\Users\HP\Desktop\NodeJS/test.json");
file3 = path.parse("C:\Users\HP\Desktop\NodeJS/test.json");
file3 = path.resolve("C:\Users\HP\Desktop\NodeJS/test.json");
console.log(file);
console.log(file2);
console.log(file3);