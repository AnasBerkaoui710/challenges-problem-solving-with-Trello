const prompt= require("prompt-sync")()


let n =+ prompt("entrer un nombre: ")
//tester la divisibilite de n
if(n%3==0 && n%5 == 0){
    console.log("TechLead");
    
}
else if (n%3 == 0) {
    console.log("Tech");
}

else if (n%5 == 0) {
    console.log("Lead");
}
else{console.log(n);

}
