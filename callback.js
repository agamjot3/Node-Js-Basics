function getMessage(){
    setTimeout(()=>{
        console.log('Get Message Function')
    },1000)
}
function putMessage(){
    console.log('Put Message Function')
};

getMessage();
putMessage();