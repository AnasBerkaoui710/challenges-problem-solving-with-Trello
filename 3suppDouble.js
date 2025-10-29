const prompt= require("prompt-sync")()

let array = [1, 2, 2, 3, 4, 4, 5]


for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] == array[j]){
            array.splice(j,1)
            j--
        }
    }
}



console.log(array);
