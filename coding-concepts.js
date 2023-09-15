// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
//console.log(cohort.split(""))

// a) Your answer: Output will be [`F`,`o`,`x`,`t`,`r`,`o`,`t`,` `,`2`,`0`,`2`,`3`]
// b) Verify and explain: Answer is correct! .split("") will make the string into an array, but since the split has ("") quotations in the argument each letter of the string will be split/seperated.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: It will log `Hello, LEARN Student!` 
// b) Verify and explain: I got the answer wrong because the function does not have a return. A function needs to ALWAYS have a return inside it. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: Does not run because it does not have a function, so it would not know what number is.
// b) Verify and explain: I was wrong. It does not need a function in order for .map to work. It ran through the array with .map() and once you called the multipliedByTwo it added the array into number(after .map) and did the math portion which was to multiply by two. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: It does not work because it does not have a .map to run through the array which will allow each number to run through the math after .filter()
// b) Verify and explain: It does not need .map to run through the array. Once you call on the const it added each number one by one to see IF the number was even or odd and once it found out the odd number it printed it out, still as an array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: It will output "JavaScript"
// b) Verify and explain: I was correct! Using objects, I determined that console.log called on the function along with .languages which only looks at the dot notation or key value of languages: and since it has the index of [0] I determined that "JavaScript" was in the 0 location, so I knew it was going to output "JavaScript". 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
//console.log(learnStudent)

// a) Your answer: Should output "Goeorge"
// b) Verify and explain: I doubted myself and thought only const learnStudent would output the only word that was being changed. Console.log was calling on the class, so it would output the class Learn {student: `George`, cohort: `Echo`, year: `2023`}. It would dispaly the blueprint. 
