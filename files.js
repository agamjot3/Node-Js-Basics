
const fs = require('fs');

// Reading from files


fs.readFile("text.txt",'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});

fs.stat('text.txt',(err,stats)=>{

    console.log(stats.size);
    console.log(stats.isSymbolicLink);
    
});


// Writing and Updating Files

const content = [{
    type:"Node App",
    about:"Learning",
    really:"yes",
   
}];

fs.writeFileSync('test.json', JSON.stringify(content));

const a = "Node App for Backend";

fs.writeFile('text.txt',a,err=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Successfully Done");
});