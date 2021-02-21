const http = require("https");


const data = JSON.stringify({
    name:"Agamjot Singh",
    job: "Devops"
});

const options = {
    hostname:'reqres.in',
    path:'/api/users',
    method:'post',
    header:{
     'Content-Type':'application/json'
    }
}

//request

const req = http.request(options, (res)=>{
    let data = "";
    console.log("Status Code:", res.statusCode)

    res.on('data',(chunk)=>{
         data+=chunk;
    })
    res.on('end',()=>{
        console.log("Body:",JSON.parse(data));
    })
})   

req.write(data)
req.end();