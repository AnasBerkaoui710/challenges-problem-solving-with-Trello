const prompt= require("prompt-sync")()


let n=+prompt("entrer le nombre: ")//recuperer le nombre from l'utilisateur
function escalier(){
    let n1=1
    let n2=2
    let somme

    if(n===1) return 1;
    if(n===2) return 2;

    for (let i = 3; i <= n; i++) {
        somme = n1+n2
        
        n1=n2
        n2=somme
       
    }
    return n2
    
}


console.log(escalier());
