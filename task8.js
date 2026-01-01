//output sebuah array dengan isian string email

const url = "https://jsonplaceholder.typicode.com/users";

const chars = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

const ubahHurufKeKecil = (huruf) => {
  if (chars[huruf]) {
    return chars[huruf];
  } else {
    return huruf;
  }
};

const ubahEmailKeKecil = (email) => {
  let tampung = "";
  for (let i = 0; i < email.length; i++) {
    tampung = tampung + ubahHurufKeKecil(email[i]);
  }
  return tampung;
};
//

//asyn await tanpa metod toLowerCase()
const datas2 = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const target = data.map((item) => {
      let email = item.email;
      let kecil = ubahEmailKeKecil(email);
      return kecil;
    });

    console.log(target);
  } catch (error) {
    console.log("error", error);
  }
};

datas2();

//

// asyn await toLowerCase()
const datas = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const target = data.map((item) => {
      let email = item.email.toLowerCase();
      return email;
    });

    console.log(target);
  } catch (error) {
    console.log("error", error);
  }
};
datas();

//

// then cath tanpa toLowerCase()

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let target = data.map((item) => {
      let email = item.email;
      let kecil = ubahEmailKeKecil(email);
      return kecil;
    });

    console.log(target);
  })
  .catch((error) => {
    console.log("error", error);
  });

// then cath toLowerCase()
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let target = data.map((item) => {
      return item.email.toLowerCase();
    });

    console.log(target);
  })
  .catch((error) => {
    console.log("error", error);
  });
