const prompt = require("prompt-sync")()

let table = [1,1,1,0,1,1,1,0,1,0];

for(let i=0;i<table.length;i++){
    if(table[i]==0){
        console.log(table.indexOf(table[i]));
        break;
    }

}
