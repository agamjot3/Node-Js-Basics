const http = require("https");
const axios = require("axios");


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

axios.post('https://reqres.in/api/users', data).then(res=>{
    console.log('Status Code:' + res.status);
    console.log('Body' + JSON.stringify(res.data));
}).catch(err=>{
    console.log(err)
})