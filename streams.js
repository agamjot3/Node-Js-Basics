//  Without Streams Data Processing

const http = require("http");
const fs = require("fs");


const server = http.createServer((req,res)=>{
    fs.readFile('test.json', (err, data)=>{
        res.end(data);
    })
})



// With Stream Data Processing

const server2 = http.createServer((req,res)=>{
    const stream = fs.createReadStream('test.json')
    stream.pipe(res);

})



server2.listen(3000, ()=>{
    console.log("Application started on port 3000");
})
