var moment = require('moment')

// Null & Undefined
function isNull(value) {
    return value === null
}
var emptyGlass = null
console.log(isNull(emptyGlass))
console.assert(isNull(emptyGlass) === true)

function isUndefined(value) {
    return value === blockOfClay
}
var blockOfClay
console.log(isUndefined(blockOfClay))
console.assert(isUndefined(blockOfClay) === true)

// Booleans
function isTrue(value) {
    return value === true
}
console.log(isTrue(1 + 1 === 2))
console.assert(isTrue(1 + 1 === 2) === true)

// Strings
function convertCaseLower(value) {
    return value.toLowerCase()
}
console.log(convertCaseLower('I AM WISPERING.'))
console.assert(convertCaseLower('I AM WISPERING.') === 'i am wispering.')

function convertCaseUpper(x) {
    return x.toUpperCase()
}
console.log(convertCaseUpper('i am shouting!'))
console.assert(convertCaseUpper('i am shouting!') === 'I AM SHOUTING!')

function repeatWord(value) {
    value = 'Knock.'
    return value.repeat(2)
}
console.log(repeatWord('Knock.', 2))
console.assert(repeatWord('Knock.', 2) === 'Knock.Knock.')

function sliceWord(value) {
    value = "I love pizza!"
    return value.slice(7,12)
}
console.log(sliceWord('I love pizza!', 7, 12))
console.assert(sliceWord('I love pizza!', 7, 12) === 'pizza')

function splitWord(value) {
    return value.split(',')
}
console.log(splitWord('US,CA,MX,JP,UK', ','))
console.assert(splitWord('US,CA,MX,JP,UK', ',').length === 5)
function whereIsCarmen(value) {
    return value.indexOf('Carmen')
}
console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen'))
console.assert(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27)

function doesItContain(value) {
    return value.includes('Museum')
}
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))
console.assert(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true)

// Regular Expressions
function extractZipCode(value) {
    return value.match(/\d\d\d\d\d/)[0]
}
console.log(extractZipCode('My zip code was 46240.'))
console.assert(extractZipCode('My zip code was 46240.') === '46240')

function isPhoneNumber(value) {
    return /.\d\d\d.\s\d\d\d.\d\d\d\d/.test(value)
}
console.log(isPhoneNumber('(888) 123.1234'))
console.assert(isPhoneNumber('(888) 123.1234') === true)

// Numbers
function stringToNumber(value) {
    return value = parseInt(value)
}
console.log(stringToNumber('1999'))
console.assert(stringToNumber('1999') === 1999)

function incrementByOne(value) {
    value++
    return value
}
console.log(incrementByOne(0))
console.assert(incrementByOne(0) === 1)

function isDivisibleByThree(value) {

    return value % 3 === 0
}
console.log(isDivisibleByThree(9))
console.assert(isDivisibleByThree(9) === true)

function makeRandomNumber(value) {
    return Math.round(Math.random() * value)
}
console.log(makeRandomNumber(10))
console.assert(makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10)

function roundNumber(value) {
    return Math.round(value)
}
console.log(roundNumber(5.51))
console.assert(roundNumber(5.51) === 6)

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    return moment().format('dddd')
}
console.log(justAMoment())
console.assert(justAMoment().includes('day') === true)

// Objects
function myNameIs(value) {
    return value.name
}
console.log(myNameIs({name:'Your Name Here'}))
console.assert(myNameIs({name:'Your Name Here'}) === 'Your Name Here')

// Arrays
function getFirstItem(value) {
    return value[0]
}
console.log(getFirstItem(['Dog','Cat','Pig','Bird','Fish']))
console.assert(getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')

//EXTRA CREDIT ***********************************************

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    return Math.max(x,y)
}
console.log(max(10,12))

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    return Math.max(x,y,z)
}
console.log(maxOfThree(10,12,13))

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if(char==='a'){
        return true
    }
    else if(char==='e'){
        return true
    }
    else if(char==='i'){
        return true
    }
    else if(char==='o'){
        return true
    }
    else if(char==='u'){
        return true
    }
    else{
        return false
    }
}
console.log(isVowel("e"))

// ---------------------
// Write a function translate() that will translate a text into "Rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

// function rovarspraket(phrase){
//
//
// }
function translate(text) {
  var string = text.toLowerCase()
  var vowels = ["a", "e", "i", "o", "u", " "]
  var y = ""
  for (i = 0; i < string.length; i++) {
     var current = string.charAt(i)
    if (vowels.indexOf(current) != -1) {
        y = (y + (current))
    } else {
        y = (y + (current + "o" + current))
    }
  }
  return y
}

console.log(translate("Hi my name is Kyle"));


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(text){
for(i=15; i=0; i--){
    return text.length[i]
}
}
console.log(reverse("abcdefghijklmnopq"))

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
