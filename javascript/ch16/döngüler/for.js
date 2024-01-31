//? CH-13
// let result =  0;
// let line = "";
// for( let row = 1; row <= 10; row ++){
    // for(let col = 1; col <= 10; col ++){
        // result = col * row
        // line += result + "\t"
    // } line += result + "\n"
// }
// console.log(line);
// 
//? ENES BAYRAM
// for(let i = 1; i <= 10; i++){
    // for(let j = 1; j <= 10; j++){
    // console.log(i +"x"+ j + "=" + (i * j));
    // } console.log("----------");
// }

//? ASAL SAYI ÖRNEĞİ EB
// let sayi = Number(prompt("Lürfen bir sayı giriniz."))
// let sonuc = true
// 
// for(let i = 2; i <= Math.floor((sayi / 2)); i ++){
    // if(sayi % i == 0){
        // sonuc = false
        // break;
    // }
// }    if(sonuc){
        // alert(`${sayi} asaldır`);
    // }else{
        // alert(`${sayi} asal sayı değildir`);
    // }

    //?FAKTÖRİYEL BULMA
    // let sayi1 = Number(prompt("Lütfen bir sayı giriniz"));
    // let sonuc = 1
// for(i = 1; i <= sayi1; i ++){
    // sonuc = sonuc * i
// }
// console.log(sonuc);

    //? ARMSTRONG SAYISI BULMA- basamakların sayı değerlerinin küpü sayıya eşit olmalıdır yani;        153 = 1³ + 5³ + 3³  (örn : 153,307,470)

    // let sayi = prompt("lütfen bir sayı giriniz") //* Numberlaştırmamamızın sebebi aşağıda kullanacağımız .lenght ve .charAt değerlerinin string ifadelerde çalışmasıdır
    // let toplam = 0
    // for(let i = 0; i <= sayi.length; i++){
        // let rakam = sayi.charAt(i)
        // toplam += rakam * rakam * rakam
    // }

    // if(toplam == sayi){
        // alert(`${sayi} armstrong sayısıdır`)
    // }else {
        // alert(`${sayi} armstrong sayısı değildir`)
    // }



let sayi = "denizLi"
let kar = sayi.charAt(5);
console.log(kar);


