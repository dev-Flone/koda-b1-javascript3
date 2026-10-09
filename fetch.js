const user = [
  {
    id: 1,
    name: "John",
    email: "john@koda.com",
  },
  {
    id: 2,
    name: "Brando",
    email: "brando@koda.com",
  },
];
const users = JSON.stringify(user);
const testUser = JSON.parse(users);
// console.log(users);
// console.log(testUser);
// console.log(typeof users);
// console.log(typeof testUser);
// console.log(testUser[0].email);
user.push({ id: 3, name: "Afif", email: "afif@koda.com" });
console.log(user);
user[2].name = "Rizal";
console.log(user);
user.splice(1, 1, { id: 3, name: "Afif", email: "afif@koda.com" });
console.log(user);

// API

// const url = "http://pokeapi.co/api/v2/pokemon/ditto";
// fetch(url)
//   .then((response) => {
//     console.log(response);
//     console.log(typeof url);
//     console.log(typeof response);
//   })
//   .catch((err) => {
//     console.error("Error: ", err);
//   });

// Akses data API
const url = "http://pokeapi.co/api/v2/pokemon/ditto";

// fetch(url).then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// Fetch async await
async function getPokemon() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Nama: ", data.name);
    console.log("Berat: ", data.weight);
    console.log("Tinggi: ", data.height);
  } catch (err) {
    console.error(err);
  }
}
getPokemon();
