// let arr = [1, 2, 3, 4, 5]

// ----------includes()

// console.log(arr.includes(2))

// -----------------lastIndexOf

// let fruits = ['banana', 'orange', 'apple', 'banana', 'kiwi', 'banana']
// console.log(fruits.lastIndexOf('banana'))

// ------------findIndex
// let arr = [1, 5, 3, 4, 5, 6, 7, 8]
// // returns the index of the first element in the array that satisfies the provided testing function

// // whenever you give a function as an argument to a function, that is known as a callback function

// // function cb() { //callback function
// //     // conditions
// // }
// // let result = arr.findIndex(cb)

// function greaterThan4(element) { //returns a boolean value
//     return element > 4
// }

// let result = arr.findIndex(greaterThan4)

// console.log(result)

// -----------CONCAT
// let arr1 = ['a', 'b', 'c']
// let arr2 = ['d', 'e']

// let arr3 = arr1.concat(arr2)

// console.log(arr3)

// -------------toString

// const arr = [1, 2, 'a', '1a'];

// let result = arr.toString()

// console.log(result)

// -------JOIN

// let fruits = ['apple', 'banana', 'orange']

// // let result = fruits.join('-')
// // let result = fruits.join('')
// // let result = fruits.join(' ')
// let result = fruits.join()

// console.log(result)

// -----------SOME

// let arr = [1, 2, 3, 4, 5]

// function isEven (element) { //if the element is even or not
//     if(element % 2 === 0 ) {
//         return true
//     }
//     return false
// }

// element % 2 === 0 -----> True, False

// function isEven(element) { //testing condition
//     return element % 2 === 0
// }

// let result = arr.some(isEven)
// let result = arr.some(function (element) {
//     return element % 2 === 0
// })
// let result = arr.some((element) => {
//     return element % 2 === 0
// })

// let result = arr.some(element => element % 2 === 0)
// console.log(result)

// -------------EVERY - returns true if EVERY element of the array satisfies the given condition
// let arr = [2, 4, 6, 8]

// let result = arr.every(item => item % 2 === 0)
// console.log(result)

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.some(y => y < 2)) //true
// console.log(arr.every(y => y < 6)) //true

// let str = 'string '
// console.log(str.length)

// let fruits = ['apple', 'orange', 'banana', 'pear']

// console.log(fruits.some(item => item.length < 5)) //true

// ------------FILTER - returns a new array WITH the elements that satisfy the given condition

// let arr = [1, 2, 3, 4, 5]

// function isGreaterThan3(element) {
//     return element > 3
// }

// let resultArray = arr.filter(isGreaterThan3)

// let resultArray = arr.filter(element => element >= 3)

// console.log(resultArray)

// filter out odd elements

// let oddElems = arr.filter(item => item % 2 !== 0)
// console.log(oddElems)

// ----------Map

// returns a new array populated with the results of the callback function

// let arr = [1, 2, 3, 4, 5]

//-------- normal way
// let newArr = []; //doubled values
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)
// }
// console.log(newArr)

// --------using map()

// function double(item) {
//     return item * 2
// }

// let newArr = arr.map(double)
// let newArr = arr.map(element => element * 2)
// console.log(newArr)

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [10, 9, 8]

// let newArr1 = arr1.map(item => item * item)
// let newArr2 = arr2.map(item => item * item)

// console.log(newArr1, newArr2)

// let arr = [1, 2, 3, 4, 5] //Question - return a new array which adds 5 to each element

// let newArr = arr.map(e => e + 5)

// console.log(newArr)

// -------FOREACH - executes a provided function once for EACH element in the array

// let arr = [1, 2, 3, 4, 5]

// using for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2)
// }

// forEach

// arr.forEach(item => {
//     console.log(item * 2)
// })

// using forEach calculate the sum of elements in arr
// let arr = [1, 2, 3, 4, 5]

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)

// let sum = 0
// arr.forEach(item => {
//     sum += item //sum = sum + item
// })

// console.log(sum)

// ---------------REDUCE ----- returns a single value
// accumulator, current, initial value

// let arr = [1, 2, 3, 4, 5]

// let initialValue = 0
// let result = arr.reduce(function (accumulator, current) {
//     accumulator = accumulator + current //accumulator += current
//     return accumulator
// }, initialValue)

// console.log(result)

//let arr = [1, 2, 3, 4, 5]

// let squaredArr = arr.map(item => item * item) //squaring arr

// let evenSquares = squaredArr.filter(item => item % 2 === 0) //filtering out even values

// let sumOfEvenSquares = evenSquares.reduce((acc, curr) => {
//     acc += curr
//     return acc
// }, 0)

// console.log(sumOfEvenSquares)

// FILTER MAP AND REDUCE ARE CHAINABLE
// let sumOfEvenSquares = arr.map(item => item * item).filter(item => item % 2 === 0).reduce((acc, curr) => {
//     acc += curr
//     return acc
// }, 0)

// console.log(sumOfEvenSquares)

// let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filtered salaries

// find out the total salary
