// Membuat program antrian (queue) dengan memanfaatkan Promise dan setTimeout
// Tampilkan nama "John" setelah 1500ms
// Tampilkan nama "Ed" setelah 2000ms
// Tampilkan nama "Jane" setelah 500ms
// Gunakan sintaks chaining then-catch dan juga async-await untuk implementasi dan handling-nya

function antrian(name, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
}

// antrian("John", 1500)
//   .then((hasil) => {
//     console.log(hasil);
//     return antrian("Ed", 1500);
//   })
//   .then((hasil) => {
//     console.log(hasil);
//     return antrian("Jane", 500);
//   })
//   .then((hasil) => {
//     console.log(hasil);
//   })
//   .catch((err) => {
//     reject("Error: ", err);
//   });

async function jalankanAntrian() {
  try {
    const john = await antrian("John", 2000);
    console.log(john);

    const ed = await antrian("ed", 1500);
    console.log(ed);

    const jane = await antrian("Jane", 500);
    console.log(jane);
  } catch (err) {
    reject("Error: ", err);
  }
}
jalankanAntrian();
