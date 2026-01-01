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
    wait: 9,
  },
  {
    name: "",
    wait: 2,
  },
];

function queue(data) {
  let index = 0;
  function start() {
    return new Promise((resolve, reject) => {
      const person = data[index];
      if (person.name !== "") {
        console.log("Menunggu antrian...");

        setTimeout(() => {
          console.log(`pesanan ${person.name} sudah siap`);
          index += 1;
          resolve(start());
        }, person.wait * 1000);
      } else {
        reject();
      }
    });
  }
  return start();
}

queue(data)
  .then()
  .catch(() => {
    console.log("Nama tidak boleh kosong");
  });
