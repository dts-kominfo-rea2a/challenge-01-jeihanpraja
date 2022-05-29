// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const favoriteColor1 = new Set(["Yellow", "Pink", "White", "Purple"]);
const favoriteRestaurant1 = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: favoriteColor1,
    isHavePet: "Yes",
    education: {
        name: ["SD 01", "SMP 02", "SMA 03"],
        city: ["Jakarta", "Jakarta", "Tangerang"] ,
        graduate: [2016, 2019, null]
    },
    favoriteRestaurant: favoriteRestaurant1,
};

const favoriteColor2 = new Set(["Blue", "Black", "Grey"]);
const favoriteRestaurant2 = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: favoriteColor2,
    isHavePet: "No",
    education: {
        name: ["SD 02", "SMP 03", "SMA 01", "Universitas Maju"],
        city: ["Jakarta", "Bogor", "Surabaya", "Tangerang"],
        graduate: [2010, 2013, 2016, null],
    },
    favoriteRestaurant: favoriteRestaurant2,
};

// // TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);


// // ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};