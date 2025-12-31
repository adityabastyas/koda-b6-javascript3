//membuat progam antrian nasi padang

const data = [
  {
    name: "Adit",
    wait: 3,
  },
  {
    name: "Anton",
    wait: 5,
  },
  {
    name: "Aska",
    wait: 2,
  },
  {
    name: "Jaka",
    wait: 5,
  },
  {
    name: "reza",
    wait: 6,
  },
  {
    name: "arif",
    wait: 7,
  },
  {
    name: "vincent",
    wait: 4,
  },
  {
    name: "hilal",
    wait: 8,
  },
  {
    name: "wildan",
    wait: 9, // tungg 9 detik
  },
];

// muncul menunggu antrian .....
/// wait timeout
// halo ${name} pesananmu sudah selesai

//urutan harus sesuai urutan data
//mennunggu antrian
// halo nama pesanan sudah selesai
// menunggu antrian
// halo nama pesanan sudah selesai

const antri = () => {
  let waktu = 0;

  for (let i = 0; i < data.length; i++) {
    const orang = data[i];

    setTimeout(() => {
      console.log("menunggu antrian");
    }, waktu * 1000);

    waktu = waktu + orang.wait;

    setTimeout(() => {
      console.log(`halo ${data[i].name}, pesananmu sudah selesai`);
    }, waktu * 1000);
  }
};

antri();
