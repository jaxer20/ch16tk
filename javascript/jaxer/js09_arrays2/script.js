//?ÖRNEK1
const maaslar =[50000,35000,120000,44000]
sum = 0
for(let i=0; i<maaslar.length; i++){
sum +=maaslar [i]
console.log(i, sum);
}
console.log("SUM:", sum);

//?ÖRNEK2
const notlar = [50,45,67,100,10];
const kucuk = []
const buyuk = []
for (let i =0; i < notlar.length; i++) {
    if(notlar[i]<50){
        kucuk.push(notlar[i])
    }else{
        buyuk.push(notlar[i])
    }
    
}
console.log(notlar);
console.log(kucuk);
console.log(buyuk);

//?ÖRNEK3 for in
const sayilar =[50000,35000,120000,44000]
let total = 0

for(let i in sayilar){
    total += sayilar[i]
}
console.log("AVG:", total / sayilar.length);

//?ÖRNEK3 for in
const notlar1 = [50,45,67,100,10];
const kucuk1 = []
const buyuk1 = []

for (let i in notlar1) {
    notlar1[i]<50 ? kucuk1.push(notlar1[i]) : 
    buyuk1.push(notlar1[i])    
}
console.log(notlar1);
console.log(kucuk1);
console.log(buyuk1);

