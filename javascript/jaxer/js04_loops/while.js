
//! örnek 1
let i = 1
while(i<=10) {
console.log(i, "CH16")
i++
}
console.log("döngü bitti");

for(let i = 1; i <=10; i++){
    console.log("i, ch16");
}
console.log("döngü bitti");

//! örnek2 //? 
//?Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.
// let sayi = +prompt("0-100 arasinda sayi giriniz")
// if(sayi<0 || sayi>100) {
    // alert ("sayi 0-100 arasinda degil")
// } 
// !karar yapıları ile tekrarlama işlemi yapılamaz
// let sayi1 = +prompt("0-100 arasinda sayi giriniz")
// let exit = false  //!FLAG MECHANISM
// 
// while((sayi1<0 || sayi1>100)){
    // console.log("lütfen 0-100 arasinda sayi giriniz");
    // // sayi1 = prompt("0-100 arasinda sayi giriniz veya çıkma için Q tuşuna basiniz")
    // if(sayi1=== "q"){
        // exit = true
        // break
    // }
// }
// // exit ? console.log("cikis yapildi") : console.log("girilen sayi:", sayi1);
// console.log("girilen sayi", sayi1);



let sayi2 = +prompt("0-100 arasinda sayi giriniz")
let exit2 = false

for( ;sayi2<0 || sayi2>100; ){
    console.log("lütfen 0-100 arasinda sayi giriniz");
    sayi2 = prompt("0-100 arasinda sayi giriniz veya çıkma için Q tuşuna basiniz")
    if(sayi2=== "q"){
        exit2 = true
        break
    }
}
exit2 ? console.log("cikis yapildi") : console.log("girilen sayi:", sayi2);
// console.log("girilen sayi", sayi2)