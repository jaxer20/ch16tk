// * Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her 
//* yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa 
//* "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.
// 
//* console.log("*** WELCOME TO GUESS GAME ****")
// 

// let sayi = Math.floor(Math.random()*100)
// console.log(sayi);
// let tahmin = +prompt("0-100 arasindaki sayiyi tahmin ediniz")

// for(i = 5; i <= 0; i--){
     
    // if (tahmin == sayi){
    //    alert(`. tahmininizde bildiniz`);
    // } if (tahmin < sayi){
        // alert(`Yukarı . tahmin hakkiniz kaldi`)
    // } if (tahmin > sayi){
        // alert(`Aşağı . tahmin hakkiniz kaldi`)
    // }
    //  else{
        // alert("0-100 arasinda değer giriniz")
    // }

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
exit2 ? console.log("cikis yapildi") : console.log
("girilen sayi:", sayi2);
// console.log("girilen sayi", sayi2)