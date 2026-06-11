// // ==================== EXAMPLE 1: Simple forEach ====================
// let x = [1, 2, 3, 4, 5]
// x.forEach((c) => {
//     console.log(c)
// })

// ==================== EXAMPLE 2: Print values greater than 2 ====================
// let arr = [1, 2, 3, 4, 5]
// arr.forEach((num) => {
//     if (num > 2) {  
//         console.log(num)
// }
// else {    console.log(num + " is not greater than 2")
// }
// })

// // ==================== EXAMPLE 3: Square each number ====================
// let numbers = [1, 2, 3, 4, 5]
// let newArr=numbers.map((n) => {
//     return n * n
// })
// console.log("New array from map:", newArr)  // map returns a new array
// console.log("Original array:", numbers)  // Original array remains unchanged

// // ==================== EXAMPLE 4: Using index and array parameters ====================
// let fruits = ["Apple", "Banana", "Orange", "Mango"]
// fruits.forEach((fruit, index) => {
//     console.log(index + ": " + fruit)
// })

// // ==================== EXAMPLE 5: Sum all numbers ====================
// let values = [10, 20, 30, 40, 50]
// let sum = 0
// values.forEach((val) => {
//     sum = sum + val
// })
// console.log("Total Sum:", sum)

// // ==================== EXAMPLE 6: Count elements ====================
// let items = ["a", "b", "c", "d"]
// let count = 0
// items.forEach(() => {
//     count++
// })
// console.log("Total items:", count)

// // ==================== EXAMPLE 7: Filter and print even numbers ====================
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// nums.forEach((num) => {
//     if (num % 2 === 0) {
//         console.log("Even:", num)
//     }
// })

// // ==================== EXAMPLE 8: Transform and print ====================
// let words = ["hello", "world", "javascript"]
// words.forEach((word) => {
//     console.log(word.toUpperCase())
// })

// // ==================== EXAMPLE 9: Using all three parameters ====================
// let data = [100, 200, 300]
// data.forEach((value, index, array) => {
//     console.log(`Index ${index}: Value ${value}, Array: [${array}]`)
// })

// // ==================== EXAMPLE 10: forEach with objects in array ====================
// let users = [
//     { name: "Animesh", age: 25 },
//     { name: "John", age: 30 },
//     { name: "Sarah", age: 28 }
// ]

// users.forEach((user) => {
//     console.log(user.name + " is " + user.age + " years old")
// })


let arr = [10, 20, 30]
let mapped = arr.map((element, index, array) => {
    return `Index ${index}: ${element}, Array: [${array}]`
})
console.log(mapped)