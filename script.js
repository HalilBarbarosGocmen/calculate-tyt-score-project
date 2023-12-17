let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;

let mesaj = `TYT Puan Hesapla : 1
Çıkış Yap : 2

Lütfen gerçekleştirmek istediğiniz işlemin numarasını giriniz.`;

let osym = 100

let screenPrompt = Number(prompt(mesaj));

switch (screenPrompt) {
  case 1:
    turkceDogru = Number(prompt('Türkçe doğru sayınızı giriniz'))
    turkceYanlis = Number(prompt('Türkçe yanlış sayınızı giriniz'))

    matematikDogru = Number(prompt('Matematik doğru sayınızı giriniz'))
    matematikYanlis = Number(prompt('Matematik yanlış sayınızı giriniz'))

    sosyalDogru = Number(prompt('Sosyal Bilgiler doğru sayınızı giriniz'))
    sosyalYanlis = Number(prompt('Sosyal Bilgiler yanlış sayınızı giriniz'))

    fenDogru = Number(prompt('Fen Bilgisi doğru sayınızı giriniz'))
    fenYanlis = Number(prompt('Fen Bilgisi yanlış sayınızı giriniz'))

    okulPuan = Number(prompt('0 ile 60 arasında olan okul puanınızı giriniz.'))
  
    if (turkceDogru >= 0 && turkceDogru <= 40 && turkceYanlis >= 0 && turkceYanlis <= 40 && matematikDogru >= 0 && matematikDogru <= 40 && matematikYanlis >= 0 && matematikYanlis <= 40 && sosyalDogru >= 0 && sosyalDogru <= 40 && sosyalYanlis >= 0 && sosyalYanlis <=40 && fenDogru >= 0 && fenDogru <= 40 && fenYanlis >= 0 && fenYanlis <= 40 && okulPuan >= 0 && okulPuan<=60) {

      let dogruSonuc = turkceDogru + matematikDogru + sosyalDogru + fenDogru
      let yanlisSonuc = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis
      let netSonuc = dogruSonuc- (yanlisSonuc/4)
      let puan = (netSonuc * 4) + osym + okulPuan
      screentext.innerHTML = `TYT Panıız ${puan} Puandır.`

    } else {
        screentext.innerHTML = 'Lütfen geçerli değerler giriniz.'

    }
    break;

  case 2:
   screentext.innerHTML = 'Başarı ile çıkış yapıldı. İyi Günler.'
    break;
  default:
    screentext.innerHTML = 'Lütfen sayfayı yenileyip geçerli değerler giriniz.'


    break;
}
