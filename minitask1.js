// slice() method in array
// slice()
// slice(start)
// slice(start, end), end tidak di tidak termasuk

const buah = ["apel", "jeruk", "mangga", "durian", "manggis"];

console.log(buah.slice(3));
console.log(buah.slice(1, 4));
console.log(buah.slice(0, 3));
console.log(buah.slice(-3));
console.log(buah.slice());
console.log(buah);

console.log("========================");
const a = buah.slice(3);
const b = buah.slice(0, 3);

console.log(a);
console.log(b);
const ab = [...a, ...b];
console.log(ab);

console.log("========================");
const c = buah.slice(-3, 3);
console.log(c);

console.log("========================");
console.log([1, 2, 3, 4, 5].slice(1, 3));

// Menggantikan slice(3)
let hasil1 = [];
for (let i = 3; i < buah.length; i++) {
  hasil1[hasil1.length] = buah[i];
}
console.log(hasil1);

// Menggantikan slice(1, 4)
let hasil2 = [];
for (let i = 1; i < 4; i++) {
  hasil2[hasil2.length] = buah[i];
}
console.log(hasil2);

// Menggantikan slice(0, 3)
let hasil3 = [];
for (let i = 0; i < 3; i++) {
  hasil3[hasil3.length] = buah[i];
}
console.log(hasil3);
