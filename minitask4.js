// Melakukan fetching data dari "https://jsonplaceholder.typicode.com/users"
// Mengubah uppercase string dari email menjadi lowercase
// - Dengan menggunakan built-in method
// - Tanpa menggunakan built-in method
// Tampilkan list email yang sudah diubah ke dalam bentuk array
// Handling fetch data dengan then-catch dan async-await

const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       console.errror("Gagal mengambil data.");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const emails = data.map((user) => user.email.toLowerCase());
//     console.log(emails);
//   })
//   .catch((err) => {
//     console.error("Gagal mengambil email: ", err);
//   });

fetch(url).then((response) => {
  response.json().then((data) => {
    const arr = [];
    data.forEach((user) => {
      const email = user.email;
      const lowerEmail = email.toLowerCase();

      arr.push(lowerEmail);
    });
    console.log(arr);
  });
});

// async function getEmail() {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       console.error("Gagal mengambil data");
//     }
//     const data = await response.json();
//     const emails = data.map((user) => user.email.toLowerCase());
//     console.log(emails);
//   } catch (err) {
//     console.error("Email tidak ditemukan", err);
//   }
// }
// getEmail();
