//? Fonksiyonun tanımlanması (Hoisted)
selamla()
function selamla(){
    console.log("selam Cohort-16");
}

selamla()
selamla() //?invoke (call)


//? PARAMETRELI FUNCTION
function selamVer(cohort, ders){
    console.log(`Merhaba ${cohort} - ${ders}`);
}
selamVer("Cohort-16", "js")
selamVer("Cohort-17", "Css")


//? öRNEK
function topla(s1, s2){
    console.log("Toplam:", s1 + s2);
}

const s1 = +prompt("s1")
const s2 = +prompt("s2")
topla(s1, s2)