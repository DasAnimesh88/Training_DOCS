const str = "Programming";


function findVowels(str){
let vowels =['a', 'e', 'i', 'o', 'u']

let y= str.toLowerCase().split("").filter((letter) => vowels.includes(letter))

console.log(y)

}

findVowels(str)