const http = require("http");

const hostname = '127.0.0.1'
const port = '3000';

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("Welcome to HTTP Server 2")
    res.end();
}).listen(port, hostname, ()=>{
    console.log('Server 2 running at http://'+ hostname + ':' + port);
})