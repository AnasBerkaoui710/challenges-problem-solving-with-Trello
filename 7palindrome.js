let word = "tenet"
let revword=""

for(let i=word.length-1;i>=0;i--){
    revword=revword+word[i]
}
if(word == revword){
    console.log("true");
}else{
    console.log("false");
    
}


