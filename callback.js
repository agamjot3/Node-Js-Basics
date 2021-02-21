function getMessage(msg, callback){
    setTimeout(()=>{
        console.log(msg);
        callback();
    },1000)
}
function putMessage(){
    console.log('Message 2')
};

getMessage("Message 1", putMessage);
