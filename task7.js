//membuat progam antrian antrian (queue) dengan memanfaatkan Promise dan setTimeout
// tampilkan nama "John" setelah 1500ms
// tampilkan nama "Ed" setelah 2000ms
// tampilkan nama "Jane" setelah 500ms
// gunakan sintaks chaining then-catch dan juga async -await untuk implementasi dan handlingnya

// const queue1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("John");
//       setTimeout(() => {
//         console.log("Ed");

//         setTimeout(() => {
//           console.log("Jane");
//           resolve();
//         }, 500);
//       }, 2_000);
//     }, 1_500);
//   });
// };

console.log("tampilkan nama");
const queue1 = (name, time) => {
  return new Promise((resolve, reject) => {
    if (name === "") {
      reject("Nama tidak boleh kosong");
      return;
    }

    setTimeout(() => {
      console.log(name);
      resolve();
    }, time);
  });
};

queue1("John", 1_500)
  .then(() => queue1("Ed", 2_000))
  .then(() => queue1("Jane", 500))
  .catch((error) => {
    console.log(error);
  });

///////
// console.log("tampilkan nama");

const queue2 = (name, time) => {
  return new Promise((resolve, reject) => {
    if (name === "") {
      reject("Nama tidak boleh kosong");
      return;
    }

    setTimeout(() => {
      console.log(name);
      resolve();
    }, time);
  });
};

const jalankanQueue = async () => {
  try {
    await queue2("John", 1500);
    await queue2("Ed", 2000);
    await queue2("Jane", 500);
  } catch (error) {
    console.log(error);
  }
};

jalankanQueue();
