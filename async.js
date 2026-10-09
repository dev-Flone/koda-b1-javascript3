// function pesanKopi(callback) {
//   setTimeout(() => {
//     console.log("Pesan Kopi");
//     callback();
//   }, 2000);
// }

// function seduhKopi(callback) {
//   setTimeout(() => {
//     console.log("Kopi sedang diseduh...");
//     callback();
//   }, 2000);
// }

// function antarKopi(callback) {
//   setTimeout(() => {
//     console.log("Kopi diantarkan ke meja");
//     callback();
//   }, 1000);
// }

// pesanKopi(() => {
//   seduhKopi(() => {
//     antarKopi(() => {
//       console.log("Kopi diterima");
//     });
//   });
// });

// function main(callback) {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("Selamat Siang");
//     setTimeout(() => {
//       callback();
//       console.log("Selamat Sore");
//     }, 5000);
//   }, 1000);
// }

// function another() {
//   console.log("Hi");
// }

// main(() => {
//   console.log("Hi2");
//   const hasil = 10 + 5;
//   console.log("Hasil kalkulasi", hasil);
// });

// another();

// Promise
// function wait(second, text) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   reject(text);
//       resolve(text);
//     }, second * 2000);
//   });
// }

// console.log("Sebelum memanggil wait");
// const proses = wait(1, 2)
//   .then((result) => {
//     console.log("Selamat pagi");
//     return result;
//   })
//   .then((result) => {
//     console.log("Selamat siang");
//     return result;
//   })
//   .catch((error) => {
//     console.log("Error ", error);
//   });

// console.log("After Async");
// setTimeout(() => {
//   console.log("Nilai yang dikembalikan: ", proses);
// }, 2000);

// proses.then((result) => {
//   console.log("Nilai yang dikembalikan ", result);
// });

// function pesanKopiPromise(bijikopi) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (bijikopi) {
//         resolve("Kopi dipesan");
//       } else {
//         reject("Maaf, biji kopi habis");
//       }
//     }, 2000),
//   );
// }

// function seduhKopiPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi sedang diseduh");
//     }, 2000);
//   });
// }

// pesanKopiPromise(false)
//   .then((pesan) => {
//     console.log(pesan);
//     return seduhKopiPromise();
//   })
//   .then((proses) => {
//     console.log(proses);
//     console.log("Kopi siap diantar");
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// Promise Async/Await dan Try/Catch
function cekStok(barang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (barang === "Sepatu") {
        resolve("Stok tersedia: 5 unit");
      } else {
        reject(`Maaf stok ${barang} habis`);
      }
    }, 1000);
  });
}

function cekUkuran(ukuran) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ukuran === 30) {
        resolve(`Ukuran ${ukuran} tersedia.`);
      } else {
        reject(`Maaf, ukuran ${ukuran} tidak tersedia.`);
      }
    }, 2000);
  });
}

// console.log(cekStok("Sepatu"));
async function prosesBeli(barang, ukuran) {
  //   console.log(`Mengecek stok untuk ${barang}`);
  try {
    const hasil = await cekStok(barang);
    console.log("Sukseskan: ", hasil);

    const hasilUkuran = await cekUkuran(ukuran);
    console.log("Ukuran berhasil: ", hasilUkuran);
  } catch (err) {
    console.error("Error: ", err);
  }
}

prosesBeli("Sepatu", 30);
prosesBeli("Buku", 30);
// prosesBeli("Sepatu");
