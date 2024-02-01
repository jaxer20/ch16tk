console.log("********ARROW**********");

//?ÖRNEK

const mesajVer = () => console.log("js güzeldir");
//!invoke
mesajVer();

//?ÖRNEK
const kareAl = (x) => x * x;
console.log(kareAl(3));

//?ÖRNEK
// const yasHesapla = (yil) => 2024 - yil

// const yil = prompt("doğum yili:")
// console.log(`yasiniz ${yasHesapla(yil)} dir`);

// ?örnek
// const tekVeyaCift = (num) => {
//   let sonuc = "";
//   if (num % 2 === 0) {
    // sonuc = `${num} çifttir`;
//   } else {
    // sonuc = `${num} tektir`;
//   }
//   return sonuc;
// };
// 
// const sonuc = tekVeyaCift(5);
// console.log(sonuc);
// console.log(tekVeyaCift(4));

//?ÖRNEK
const mesajVer1 = () => {
  console.log("süslü");
};
mesajVer1();

//?ÖRNEK
// const topla = (s1, s2) => s1 + s2;
// const carp = (s1, s2) => s1 * s2;
// const cikar = (s1, s2) => s1 - s2;
// const bol = (s1, s2) => s1 / s2;
// 
// const hesapla = (num1, num2, op) => {
//   let sonuc = 0;
//   switch (op) {
    // case "+":
    //   sonuc = topla(num1, num2);
    //   break;
// 
    // case "-":
    //   sonuc = cikar(num1, num2);
    //   break;
// 
    // case "*":
    //   sonuc = carp(num1, num2);
    //   break;
// 
    // case "/":
    //   sonuc = bol(num1, num2);
    //   break;
// 
    // default:
    //   alert("yanlis islem");
    //   break;
//   }
//   return sonuc;
// };
// const num1 = +prompt("1.Sayi:");
// const op = prompt("Islemi giriniz: +,-,*,/:");
// const num2 = +prompt("2.Sayi:");
// const sonuc = hesapla(num1, num2, op)
// console.log(`${num1} ${op} ${num2} = ${sonuc}`)
// 
// function sayHello() {
// console.log("Hello world");
// 
// }

// sayHello()

// const msg1 = greet()
 

// function greet() {
    // return "Hello"
// }
// 
// const greet2 = function(){
// return "Hello"
// };

// greet2()
// console.log(msg1);
// console.log(greet2());

function message(username){
    console.log(`Hello ${username}`);
}
let sayHello = message
sayHello("Fs CH-16")

const multiply = (num1, num2) => {
    console.log(typeof(num1 % num2));
    return num1 % num2 ? false : true
    
}
const isDivide = multiply (252,9)
console.log(isDivide);

let x = false
console.log(x);
// console.log(num1 % num2);

let toplam = 0
let random = 0

for(i = 0; i <= 20; i ++){
    random = (Math.floor(Math.random()*100))
    if(random%2==0){
        console.log(`${random} çift sayı`);
    }else {
        console.log(`${random} tek sayı`);
    }toplam = toplam + random

}
console.log(toplam);