//membuat program antrian nasi padang

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
];

const prosesAntrian = (orang) => {
  return new Promise((resolve, reject) => {
    console.log("menunggu antrian");

    if (orang.name === "") {
      reject("nama tidak boleh kosong");
      return;
    }

    setTimeout(() => {
      console.log(`halo ${orang.name}, pesananmu sudah selesai`);
      resolve();
    }, orang.wait * 1000);
  });
};

const antri = () => {
  let promise = Promise.resolve();

  data.map((item) => {
    promise = promise.then(() => prosesAntrian(item));
  });

  return promise;
};

antri()
  .then(() => {})
  .catch((error) => {
    console.log("error:", error);
  });
