'use strict';
/* Darsga topshiriq:

1) Darsga muvofiq topshiriqning birinchi qismini takrorlang

2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi

3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - $ {ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi

P.S. Funksiyalarni chaqirish shart emas */


// let numberOfNews;

// function startProject() {
//   numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

//   while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
//     numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
//   }
// }
// startProject();

const personalNewsDB = {
  count: 0,
  news: {},
  actors: {},
  genres: [],
  privat: false,

  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");

    while (personalNewsDB.count == "" ||
      personalNewsDB.count == null || 
      isNaN(personalNewsDB.count)) {
      personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
    }
  },

  rememberNews: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
        b = prompt("Unga qancha baho bergan bo'lar edingiz?");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalNewsDB.news[a] = b;
        console.log("tayyor");
      } else {
        console.log("Error");
        i--;
      }
    }
  },

  showPesonalLevel: function () {
    if (personalNewsDB.count < 10) {
      console.log("Juda oz sonli yangiliklar o'qilibdi");
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
      console.log("Siz klassik tomoshabinsiz");
    } else if (personalNewsDB.count >= 30) {
      console.log("Siz yangilklar ishqibozisiz");
    } else {
      console.log("Xato yuz berdi");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalNewsDB.privat) {
      personalNewsDB.privat = false;
    } else {
      personalNewsDB.privat = true;
    }
  },
  writeYourGenres: function () {
  //   for(let i = 1; i < 2; i++) {
  //     let genres = prompt(`Sizning sevimli janringiz? nomer ${i}`);
  //     if(genres === '' || genres === null) {
  //       console.log('Siz notogri malumot kirittingiz');
  //       i--;        
  //     }else {
  //       personalNewsDB.genres[i - 1] = genres;
  //     }
  //   }
  for (let i = 1; i < 2; i++) {
    let genres = prompt (`Sizning sevimli janringiz, vergul yordamida yozing`).toLowerCase();
    if (genres === '' || genres === null) {
      console.log('Siz notogri malumot kirittingiz');
      i--;
    } else {
      personalNewsDB.genres = genres.split(',');
      personalNewsDB.genres.sort();
    }
  }
    personalNewsDB.genres.forEach((item, i) => {
      console.log(`Sizning sevimli janringiz: nomer ${i + 1} bu ${item}`);
    });
  },
};
personalNewsDB.writeYourGenres(); 

