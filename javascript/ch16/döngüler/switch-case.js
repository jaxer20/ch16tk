//? ATM UYGULAMASI
let yeniSatir = "\n\r";
let bakiye = 1000;

let metin = "1 - Bakiye Görüntüleme" + yeniSatir
        +"2 - Para Çekme" + yeniSatir
        +"3 - Para Yatirma" + yeniSatir
        +"4 - Çıkış" + yeniSatir
        +"Lütfen 1-4 arası değer giriniz";

let secim = prompt(metin)

switch (secim) {
    case "1":
        alert("Bakiyeniz :" + bakiye);
        break;
    case "2":
        cekilenTutar = +prompt("Çekmek istediğiniz tutarı giriniz")
        if (cekilenTutar <= bakiye) {
            bakiye = bakiye - cekilenTutar ;
            alert("Bakiyeniz :" + bakiye);
        } else {
            alert("Çekmek istediğiniz tutar bakiyenizden fazla")
        }
        break;
    case "3":
        yatirilanTutar = +prompt("Yatırmak istediğiniz tutarı giriniz")
        bakiye = bakiye + yatirilanTutar
        alert("Bakiyeniz :" + bakiye);
        break;
    case "4":
        alert("Sistemden çıkış yapılmıştır...")
        break;

    default:
        alert("1-4 arasında değer giriniz")
        break;
}