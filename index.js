// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const setFavColor1 = new Set(["Yellow", "Pink", "White", "Purple"]) ;
const setFavRestaurant1 = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]) ;

const arrFavColor1 = Array.from(setFavColor1);
const arrFavRestaurant1 = Array.from(setFavRestaurant1);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: arrFavColor1,
    isHavePet: "Yes",
    education: {
        name: ["SD 01", "SMP 02", "SMA 03"],
        city: ["Jakarta", "Jakarta", "Tangerang"] ,
        graduate: [2016, 2019, null]
    },
    favoriteRestaurant: arrFavRestaurant1,
};

const setFavColor2 = new Set(["Blue", "Black", "Grey"]);
const setFavRestaurant2 = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

const arrFavColor2 = Array.from(setFavColor2);
const arrFavRestaurant2 = Array.from(setFavRestaurant2);

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: arrFavColor2,
    isHavePet: "No",
    education: {
        name: ["SD 02", "SMP 03", "SMA 01", "Universitas Maju"],
        city: ["Jakarta", "Bogor", "Surabaya", "Tangerang"],
        graduate: [2010, 2013, 2016, null],
    },
    favoriteRestaurant: arrFavRestaurant2,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};