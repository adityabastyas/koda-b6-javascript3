// mencari 20 built in metdhod
// mencari 5 built in function
// jelaskan fungsi dari tiap tiap methode dan function yang ditemukan dengan menggunakan komentar
// berikan contoh penggunaannya

// 1. push() untuk menambahkan elemen di akhir array
const mobil = ["Toyota", "Daihatsu"];
const mobilMasuk = "BMW";
mobil.push(mobilMasuk);
console.log(mobil);

// 2. pop() untuk menghapus elemen terakhir array
const gunung = ["sumbing", "sindoro", "fuji", "merbabu"];
gunung.pop();
console.log(gunung);

// 3. shift() untuk menghapus elemen pertama array
const buah = ["angur", "jeruk"];
buah.shift();
console.log(buah);

// 4. unshift() untuk menambah elemen di awal array
const food = ["nasi", "ayam"];
const ikan = "ikan";
food.unshift(ikan);
console.log(food);

// 5. map() untuk sebagai perulangan
// Tidak mengubah array asli
// Selalu mengembalikan array baru dengan panjang yang sama
// Menggunakan return
//////
const car = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];

const result2 = car.map((item, index) => {
  return `Daftar merk mobil ke-${index + 1}: ${item}`;
});

console.log(result2);

// 6. forEach() untuk sebagai perulangan yang tidak bisa me return kan
let items = ["Apple", "Banana", "Cherry", "Durian", "Eggfruit"];

items.forEach((i) => {
  console.log(i);
});

// 7. filter() untuk memfilter atau menyaring elemen berdasarkan kondisi
const car2 = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];

const hasil2 = car2.filter((item) => {
  return item.length > 5;
});

console.log(hasil2);

// 8. incluedes() cek apakah elemen ada?
const car3 = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];
const aru = "BMW";
const ada = car3.includes(aru);
console.log(ada);

// 9. join() untuk menggabungkan sebuah array menjadi string dan memisahkan tiap element mengggunakan spasi , koma, atau lainnya
const saya = ["aditya", "bastyas", "mulya"];
const dare = saya.join(" ");
console.log(dare);

// 10. slice() untuk mengambail item array, berdasarkan dari angka awal setelahnya dan angka tujuan
let fruits = ["Apple", "Banana", "Cherry", "Durian", "Eggfruit"];
let pilih = fruits.slice(1, 3);
console.log(pilih);

//11.  toUpperCase() mengubah huruf menjadi besar
const firstName = "adit";
const firstNameBig = firstName.toUpperCase();
console.log(firstNameBig);

//12. toLowerCase() mengubah huruf menjadi kecil
const middleName = "BASTYAS";
const middleNameSmall = middleName.toLowerCase();
console.log(middleNameSmall);

// 13. trim() untuk menghapus spasi di awal dan akhir sebuah string
const sayHi = " hello ";
const hey = sayHi.trim();
console.log(hey);

// 14 split() memisalhkan sebuah string menjadi array
const hallo = "hallo";
const split = hallo.split(",");
console.log(split);

// 15. replace() mengganti teks  pada string,
const jalan = "jalan soeharto";
const berganti = jalan.replace("jalan", "soekarno");
console.log(berganti);
