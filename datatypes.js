var moment = require('moment')

var name = String("Tom")
var name2 = "Tom"

// console.log(name === name2)

var number = Number(1) === 1 //overkill
var boolean = Boolean(true) === true//overkill
//String******************************************************
var word = '       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.       '
//console.log(word.length) //Property.  Gives info about object.
//console.log(word.toUpperCase())//Method.  Does something to the object.
//console.log(word.toLowerCase())//Method.
//console.log(word.trim())//Method.  Removes spacing before and after String Objects.
//word = word.toUpperCase().trim().toLowerCase() (returns .toLowerCase)
var word = 'City Of Seattle'
// word = word.repeat(5)
//word = "Pizza Is Amazing"
//console.log(word.substr(9,7))//starts at a character count and prints a number of characters
//console.log(word.slice(9,16))//starts at a character count and prints sequential characters
//word = word.split(' ')
var indianaIndexStart = word.indexOf('Indianapolis')
var whatIsTheLetter = word.charAt(8)
var isItIndianapolis = word.includes('Indianapolis')//returns true
word = word.replace('Seattle', 'Indianapolis')
// console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 999-999-9999'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
// var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/g, '[Redacted]')
// console.log(hasPhoneNumber)

//Numbers******************************************
var number = Number('1')
number = number + (number * 50)
number++
// console.log(number)

//Math********************************************
var price = 12.49
// var priceRounded = Math.ceil(price)
var priceRounded = Math.floor(price)
// console.log(priceRounded)

// console.log(Math.PI)

var randomNumber = Math.round(Math.random() * 100)
//console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substr(0,2)
var dollars = String(price).split('.')[0]
price = dollars + '.' + cents
// console.log(price)

//Date******************************************
var today = new Date()
//console.log(today)
var yesterday = moment().subtract(2400, 'seconds')
// console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

//Objects************************************************
var pizza = Object()
var pie = {
  ingredients: 'stuff',
  meat: 'pepperoni',
  cheese: 'gorgonzola',
  price: 14.99,
  priceRounded: Math.round(14.99),
}
// console.log(pie.priceRounded)

//Array**************************************
var ingredients = ['meat', 'cheese', 'spices', 'crust', 'sauce', 12, true, moment().format('MM/DD/YYYY'), {sausage: 'mystery'}, ]
