const car = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];

//manual
for (let i = 0; i < car.length; i++) {
  console.log(`Daftar merk mobil ke-${i + 1}: ${car[i]}`);
}

//pakai method map
const result = car.map((item, index) => {
  return `Daftar merk mobil ke-${index + 1}: ${item}`;
});

console.log(result);
