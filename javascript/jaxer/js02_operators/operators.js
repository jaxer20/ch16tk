const cola = 5
const gum = 15
const buscuits = 20
const totalPrice = cola + gum + buscuits
console.log(totalPrice);
//! totalPrice ++    sonrada değiştirilemez
console.log(totalPrice);

console.log("TOTAL PRICE: ", totalPrice, "TL");
console.log("TOTAL PRICE:" + totalPrice + "TL");

const comments = totalPrice + "TL"
console.log(comments);

const firstName = "Ahmet"
const lastName = "Can"
console.log(firstName + " " + lastName);

const toplam = 50 + 40 + "TL"
console.log(toplam);

const toplam1 = "TL" + 50 + 40  
console.log(toplam1);

const s1 = 5, s2 = "4"
const s3 = "three"
console.log(s1 + s2);
console.log(s1 - s2);
const difference = s1-s3
console.log(difference);
console.log(isNaN(difference ));

const yearOfBirth = 1990
const name = "Jane"
console.log(name + " " +"is" + " " + (2022 - yearOfBirth) + " " + "years old");
console.log(name + " " +"is" + " " + (new Date().getFullYear() - yearOfBirth) + " " + "years old");

const sayim = 5
console.log(`Benim sayim ${sayim}`);
console.log(`${name} is ${2022 - yearOfBirth} 
years old`);

const pi = 3.14
// const r = prompt("Please enter r:")
// console.log(r);
// const square = pi * r * r
// console.log(`Square of circle: ${square}`);
// console.log(`Square of circle: ${Math.floor(square)}`);
// console.log(`Square of circle: ${Math.ceil(square)}`);
// console.log(`Square of circle: ${Math.trunc(square)}`);
// console.log(`Square of circle: ${Math.round(square)}`);
// console.log(`Square of circle: ${square.toFixed(2)}`);
// 
const randomNumber = Math.random()
console.log(Math.round(randomNumber * 100));

let a = 5
a++
console.log(a++);
y = a + 5
console.log(y);

let z = 4
z = z + 5
z = z+=5 
console.log(z);

let k = 20
k -=10
console.log({k});

let b = 4
b *= 3
console.log({b });

//! mod alma
const number = prompt("Please enter a 3-digit number:")
const ones = number % 10
const tens = (Math.floor(number / 10) % 10)
const hundreds = (Math.trunc(number / 100))

console.log(ones, tens, hundreds);
console.log(`Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones}`);
console.log("55" < 56);

let q = 3
let w = "5"
console.log(q + w);
console.log(typeof(q + w));
console.log(w + q);
console.log(typeof(w + q));

console.log((object));
