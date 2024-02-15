//? Fonksiyonun tanımlanması (Hoisted)
// selamla()
// function selamla(){
// console.log("selam Cohort-16");
// }
//
// selamla()
// selamla() //?invoke (call)
//
//
//? PARAMETRELI FUNCTION
// function selamVer(cohort, ders){
// console.log(`Merhaba ${cohort} - ${ders}`);
// }
// selamVer("Cohort-16", "js")
// selamVer("Cohort-17", "Css")
//
//
//? öRNEK
// function topla(s1, s2){
// console.log("Toplam:", s1 + s2);
// }
//
// const s1 = +prompt("s1")
// const s2 = +prompt("s2")
// topla(s1, s2)

//?CH13 TEN ALIŞTIRMALAR
//?ÖRNEK1
function topla(n1, n2) {
  console.log("toplam:", n1 + n2);
}
topla(3, 5);

topla(15, 25);
topla(15, "asd");

//?ÖRNEK2
function greet(firstName, lastName) {
  console.log(`Hi ${firstName} ${lastName}`);
}
greet("jaxer", "hope");

// const firstName = prompt("adınızı giriniz")
// const lastName = prompt("soyadınızı giriniz")
// greet(lastName,firstName)

// ?ÖRNEK3
// function calculate(name, yob){
// const age = new Date().getFullYear() - yob
// console.log(`${name}'s age is ${age}`);
// }
// calculate("jaxer", "1957")

//?ÖRNEK3-1
function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  return `${name}'s age is ${age}`;
}
const jaxer = calculate("jaxer", "1957");
console.log(jaxer);
console.log(calculate("oktay", "2015"));

//?ÖRNEK4
function addd(s1, s2) {
  // const add = s1 + s2
  return s1 + s2;
}

const x = addd(2, 3);
console.log(x);

//?ÖRNEK5

// function oddEven (num){

// return num%2 ? "ODD" : "EVEN"
// return num%2 ===0 ? "EVEN" : "ODD"
// }

// const number = +prompt("sayi gir")
// const tekCift = oddEven(number)
// console.log(`${number} is ${tekCift}`);

//?ÖRNEK5 3 sayının en büyüğünün bulan fonksiyonu yaz

const findBiggest = function (n1, n2, n3) {
  let biggest = n1;
  if (n2 > biggest) {
    biggest = n2;
  }
  if (n3 > biggest) {
    biggest = n3;
  }
  return biggest;
};
console.log(`The Biggest is ${findBiggest(8, 12, 15)}`);

//?ÖRNEK6
const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};

const compute = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = n1 + n2;
      break;

    case "-":
      result = n1 - n2;
      break;

    case "/":
      result = n1 / n2;
      break;

    case "*":
      result = n1 * n2;
      break;
  }
  return result;
};

console.log(compute(4, 5, "+"));
console.log(compute(10, 5, "-"));
console.log(compute(400, 5, "/"));
console.log(compute(40, 5, "*"));

//?ÖRNEK7
//
// const square = function(v,h){
// let taban = +prompt("tabn değeri giriniz")
// let yukseklik = +prompt("yükseklik")
// alan = (taban * yukseklik)/2
// return alan
// }
// console.log(square("taban","yukseklik"));

//?ÖRNEK8

const kareAl = function (sayi) {
  let sonuc = sayi * sayi;
  return sonuc;
};
console.log(kareAl(3));

const kupAl = function (sayi1) {
  return sayi1 * sayi1 * sayi1;
};
console.log(kupAl(10));

//?ÖRNEK9
const usAl = function (s1, s2) {
  return Math.pow(s1, s2);
};
console.log(usAl(2, 3));
usAl;

//?ÖRNEK10 ARTIK YIL
const artikyil = function (yil) {
  sene = yil % 4 === 0 && [yil % 100 !== 0 || yil % 400 === 0];
  return sene;
};
console.log(artikyil(4));

//?ÖRNEK11 metinde hangi harften kaç tane var

// let metin =
// //   "Fonksiyon 2 parametre almaktadır. İlk parametre taban sayı, ikinci parametre ise kuvvet tir";
// 
// let harf = prompt("harf giriniz");
// 
// function bul(a) {
//   let toplam = 0;
//   for (let i = 0; i < metin.length; i++) {
    // // if (metin.charAt(i).toLocaleLowerCase() === harf.toLocaleLowerCase()) {
        // toplam +=1
    // }
//   }
//   return toplam
// };
// let sonuc = bul(harf)
// alert("harf sayisi :" + sonuc)

//?ÖRNEK12 metinde hangi harften kaç tane var

let paragraf = "A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string."

let karakter = prompt("karakter giriniz")

let sonuc = search(karakter)
alert(`"${karakter}" karakterinden ${sonuc} adet vardır`);

function search(c){
    totalKarakter = 0
    for(let i = 0; i<paragraf.length; i++){
        if(paragraf.charAt(i).toLocaleLowerCase()===karakter.toLocaleLowerCase()){
        totalKarakter +=1
    }
    }return totalKarakter
}