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
// Mengembalikan array baru
// Panjang array sama
// Menggunakan return
const car = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];

const result2 = car.map((item, index) => {
  return `Daftar merk mobil ke-${index + 1}: ${item}`;
});

console.log(result2);

// 6. forEach() untuk sebagai perulangan
// tidak mengembalikan nilai, tidak return array baru
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

// 8. incluedes() cuntuk mengecek apakah suatu elemen ada di dalam array
const car3 = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];
const aru = "BMW";
const ada = car3.includes(aru);
console.log(ada);

// 9. join() untuk menggabungkan sebuah array menjadi string dan memisahkan tiap element mengggunakan spasi , koma, atau lainnya
const saya = ["aditya", "bastyas", "mulya"];
const dare = saya.join(" ");
console.log(dare);

// 10. slice() untuk mengambil sebagian elemen array
// Parameter pertama: index awal
// Parameter kedua: index akhir (tidak termasuk)
let fruits = ["Apple", "Banana", "Cherry", "Durian", "Eggfruit"];
let pilih = fruits.slice(1, 3);
console.log(pilih);

//11.  toUpperCase() string method, mengubah huruf menjadi besar
const firstName = "adit";
const firstNameBig = firstName.toUpperCase();
console.log(firstNameBig);

//12. toLowerCase() string method, mengubah huruf menjadi kecil
const middleName = "BASTYAS";
const middleNameSmall = middleName.toLowerCase();
console.log(middleNameSmall);

// 13. trim() string method, untuk menghapus spasi di awal dan akhir sebuah string
const sayHi = " hello ";
const hey = sayHi.trim();
console.log(hey);

// 14 split() string method, memisahkan string menjadi array, berdasarkan pemisah tertentu
// seperti spasi, koma, atau karakter lainnya
const hallo = "hallo";
const split = hallo.split(",");
console.log(split);

// 15. replace() mengganti teks  pada string,
const jalan = "jalan soeharto";
const berganti = jalan.replace("jalan", "soekarno");
console.log(berganti);

// 16. find() metod array yang berfungsi mencari satu elemen pertama yang sesuai kondisi
const angka = [78, 88, 95, 90, 87];
const adaAngkaNya = angka.find((item) => item > 89);
console.log(adaAngkaNya);

// 17. findIndex() mencari index dari elemen pertama yang sesuai kondisi

const angka2 = [78, 88, 95, 90, 87];
const angkaNya2 = angka2.findIndex((item) => item > 89);
console.log(angkaNya2);

// 18. sort() untuk mengurutkan element array
const angka3 = [78, 88, 95, 90, 87];
const urutan = angka3.sort((a, b) => a - b);
console.log(urutan);

// 19. reverse() membalikkan urutan item pada array
const huruf = ["a", "b", "c", "d"];
const hurufBalik = huruf.reverse();
console.log(hurufBalik);

// 20. concat() untuk menggabungkan dua array atau lebih
const mobil1 = ["TOYOTA", "HONDA"];
const mobil2 = ["BMW", "MITSUBISHI"];
const mobilDua = mobil1.concat(mobil2);
console.log(mobilDua);

//built in function

// 1. parseInt() mengubah string menjadi bilangan angka bulat
const angkaString = "100";
const angkaInt = parseInt(angkaString);
console.log(angkaInt);

// 2. parseFloat()
// mengubah string menjadi bilangan desimal
const angkaDesimal = "95.8";
const ubahAngkaDesimal = parseFloat(angkaDesimal);
console.log(ubahAngkaDesimal);

// 3. isNaN() untuk mengecek apakah type data bukan angka
const cekBukanAngka = "satu";
const hasilCek = isNaN(cekBukanAngka);
console.log(hasilCek);

// 4. Number() mengubah nilai menjadi tipe data number
const umur = "22";
const umurNumber = Number(umur);
console.log(umurNumber);

// 5. eval() untuk memproses sebuah string menjadi sebuah nilai Number

const angkaString2 = "91" * 8 + "89";
const hasil = eval(angkaString2);
console.log(hasil);
