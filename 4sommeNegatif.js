

let array= [2, 4, 6, -3, 5, 7]
let sum=0
function somme(){
    
    for (let i = 0; i < array.length; i++) {
        
        if(array[i]<0)break
        else {sum=sum+array[i]}
        
    }
    return sum
}
console.log(somme());
