let str = "beautiful day";

// 1. Print all other letters starting with the first one
// for (let i = 0; i < str.length; i+= 2){
//     console.log(str[i])
// }

// 2. Print index of 'e'
// console.log(str.indexOf("e"))

// 3. Print the characters that occur at even indexes
// for (let i = 0; i < str.length;i++){
//     if ( i % 2 === 0 ){console.log (str[i])}
// }

// 4. Print the characters that occur at odd indexes - do it backward
// for (let i = str.length - 1; i >= 0;i--){
//     if ( i % 2 > 0 ){console.log (str[i])}
// }
// 5. Print with each character in this format "Index of (character) is (index)"

// input: "hi"
// output:
// "Index of h is 0"
// "Index of i is 1"

// let str1 = "hi"
// for (let x = 0; x < str1.length; x++){
// console.log (`Index of ${str1[x]} is ${x}`)
// }

// // Re-do everything using another loop (`for` / `while`)

// let newSentence = "Today we are Saturday"
// let x = 0
// while (x < newSentence.length){
//     console.log (`Index of ${newSentence[x]} is ${x}`)
//     x++
// }


// 1. Return a new string without the vowels

 // input: "hello"
 // output: "hll"

 // Add the letters to a new variable with an empty string to create the new sentence 
let sentenceWithoutVowels = ""
for (let i = 0; i < newSentence.length; i++){
    if (newSentence[i] !== "a" && newSentence[i] !== "e" && newSentence[i] !== "i" && newSentence[i] !== "o" && newSentence[i] !== "u"){
        sentenceWithoutVowels += newSentence[i];       
    }
}
console.log(sentenceWithoutVowels)