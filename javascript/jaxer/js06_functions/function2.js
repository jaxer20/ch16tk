// ?örnek
const tekVeyaCift = function (num){
    let sonuc = ""
    if(num%2 === 0){
        sonuc =`${num} çifttir`  
    }else{
        sonuc =`${num} tektir`  
        }
        return sonuc 
}

const sonuc = tekVeyaCift(5)
console.log(sonuc);
console.log(tekVeyaCift(4))

// ?örnek2
const usAl = function(taban, us){

    return taban**us
}

const us = usAl(5,4)
console.log(us);

// ?örnek3

let daireAlaniHesapla = function(r){
    return Math.PI * r * r
}
const r = Number(prompt("r: değerini giriniz"))
const sonucDaire = daireAlaniHesapla (r) 
console.log(`Dairenin alanı = ${sonucDaire}`);