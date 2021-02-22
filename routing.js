// Learn Routing for HTTP Requests

const http = require('http');
const https = require('https');


function index(request,response){
    response.writeHead(200);
    response.end("Node Routing")
}
function about(request,response){
    response.writeHead(200);
    response.end("This is about page")
}
http.createServer((req,res)=>{
    if(req.url =='/') {
        return index(req,res);
      
    }
    if(req.url =='/about') {
        return about(req,res);
      
    }

}).listen(8000);