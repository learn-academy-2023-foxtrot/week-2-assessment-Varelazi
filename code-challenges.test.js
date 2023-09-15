// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// describe("divisByThree", () =>{
//     it("Decides if the number given is evenly divisible by three or not", () => {
//         expect(divisByThree(object1.number)).toEqual("15 is divisible by three")
//         expect(divisByThree(object2.number)).toEqual("0 is divisible by three")
//         expect(divisByThree(object3.number)).toEqual("-7 is not divisible by three")
//     })
// })
    const object1 = { 
        number: 15 
    }
    // Expected output: "15 is divisible by three"
    const object2 = { 
        number: 0 
    }
    // Expected output: "0 is divisible by three"
    const object3 = { 
        number: -7 
    }
    // Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
//Input: Object
//Output: A string
//Process: String interpolation. Object are being used to be mindful of key: value Condition statement to determine if it is divisible or not.

// const divisByThree = (value) => {
//     if (value % 3 === 0)  {
//         return `${value} is divisible by three`
//     }else{
//         return `${value} is not divisible by three`
//     }
// }

// console.log(divisByThree(object1.number))
// console.log(divisByThree(object2.number))
// console.log(divisByThree(object3.number))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("firstCap", () => {
//     it("First letter of each word should be capitalized", () => {
//         expect(firstCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(firstCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
//Input: Array of strings
//Output: Array of strings with first letter of the word capitalized.
//Process: Iteration, for loop, to run through the array. Index of each word in the array. 

// const firstCap = (array) => {
//     return array.map((string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1)
//     })
// }
// console.log(firstCap(randomNouns1))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// describe ("firstVowel", () => {
//     it("Should show the index(a number) of the first vowel of the word", () => {
//         expect(firstVowel(vowelTester1)).toEqual(1)
//         expect(firstVowel(vowelTester2)).toEqual(0)
//         expect(firstVowel(vowelTester3)).toEqual(2)
//     })
// })

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudo code:
//Input: Strings
//Output: Index of the first vowel of the string
//Process: Turn string into array of each letter. Iteration, for loop, to run through the arrays index. Figure out where the first vowel begins and make code output that index. Conditional statement to figure out where the vowels are. .indexOf() to what what index is at a certain location.

// const firstVowel = (string) => {
//     let turnArray = string.split("") //turns string into array. Each letter is seperate
//     for (let i = 0; i < turnArray.length; i++) {
//         if(turnArray[i] === "a"){
//             return turnArray.indexOf("a")
//         }else if(turnArray[i] === "e"){
//             return turnArray.indexOf("e")
//         }else if(turnArray[i] === "i"){
//             return turnArray.indexOf("i")
//         }else if(turnArray[i] === "o"){
//             return turnArray.indexOf("o")
//         }else if(turnArray[i] === "u"){
//             return turnArray.indexOf("u")
//         }//else{
//             //return "Enter Another Word!"
//         //}
//         //Why does else statement not work in this situation? 
//     }
// }
// console.log(firstVowel(vowelTester3))