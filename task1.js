const car = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];

//manual
for (let i = 0; i < car.length; i++) {
  console.log(`Daftar merk mobil ke-${i}: ${car[i]}`);
}

//pakai method map
car.map((item, index) => {
  console.log(`Daftar merk mobil ke-${index + 1}: ${item}`);
});
