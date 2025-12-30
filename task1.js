const car = ["Toyota", "Honda", "BMW", "Suzuki", "Wuling", "Mitsubishi"];

//manual
let result1 = [];
for (let i = 0; i < car.length; i++) {
  result1 = [...result1, `Daftar merk mobil ke-${i + 1}: ${car[i]}`];
}

console.log(result1);

// pakai method map
const result2 = car.map((item, index) => {
  return `Daftar merk mobil ke-${index + 1}: ${item}`;
});

console.log(result2);
