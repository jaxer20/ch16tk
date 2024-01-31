// let sayi2 = +prompt("0-100 arasinda sayi giriniz")
// let exit2 = false

// for( ;sayi2<0 || sayi2>100; ){
    // console.log("lütfen 0-100 arasinda sayi giriniz");
    // // sayi2 = prompt("0-100 arasinda sayi giriniz veya çıkma için Q tuşuna basiniz")
    // if(sayi2=== "q"){
        // exit2 = true
        // break
    // }
// }
// // exit2 ? console.log("cikis yapildi") : console.log("girilen sayi:", sayi2);

//? örnek
// let sayac = 12
// do{
    // console.log("Cohort16", sayac);
    // sayac++
    // console.log(sayac);
// }while(sayac <= 10)
// console.log("döngü bitti");

//? örnek do-while ile not hesaplama
// let devam = ""
// do{
// let vize = Number(prompt("vize notunu giriniz"))
// let final = Number(prompt("final notunu giriniz"))
// let ortalama = vize * 0.3 + final * 0.7
// 
// const sonuc = ortalama >=50 ? "Geçti" : "Kaldi"
// console.log(ortalama, sonuc);
// 
// devam = prompt("Hesaplamaya devam etmek ister misiniz ? e/h")
// }while (devam === "e" || devam === "E")
// console.log("uygulama kapaniyor");
// 
//? örnek while ile not hesaplama

// let devam = "e"
// while (devam === "e" || devam === "E"){
// let vize = Number(prompt("vize notunu giriniz"))
// let final = Number(prompt("final notunu giriniz"))
// let ortalama = vize * 0.3 + final * 0.7
// 
// const sonuc = ortalama >=50 ? "Geçti" : "Kaldi"
// console.log(ortalama, sonuc);
// 
// devam = prompt("Hesaplamaya devam etmek ister misiniz ? e/h")
// }
// console.log("uygulama kapaniyor");
// 

//? örnek alternatif while ile not hesaplama

let devam = "e"
while (true){
let vize = Number(prompt("vize notunu giriniz"))
let final = Number(prompt("final notunu giriniz"))
let ortalama = vize * 0.3 + final * 0.7

const sonuc = ortalama >=50 ? "Geçti" : "Kaldi"
console.log(ortalama, sonuc);

devam = prompt("Hesaplamaya devam etmek ister misiniz ? e/h").toLowerCase() //?kullanici e karfi dışında başka bir karakter girerse döngü kırılır,
if(devam !== "e"){
    break
}
}
console.log("uygulama kapaniyor");

