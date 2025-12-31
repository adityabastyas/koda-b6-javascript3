//output sebuah array dengan osoan sting email

const url = "https://jsonplaceholder.typicode.com/users";

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
    console.log(error);
  }
};
datas();
