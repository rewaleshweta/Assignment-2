const readLine=require("readline");

const func =readLine.createInterface({
 input:process.stdin,
 output:process.stdout,
})

function forInput(message){
    return new Promise((callbackFunc,err)=>{
        func.question(message,(input)=>{
            callbackFunc(input);
        }, function(){
            err();
        })
    })
}

async function TerminalInput(){
    const name=await forInput("Please enter your name:");
    console.log("Hello " + name);
}
TerminalInput();