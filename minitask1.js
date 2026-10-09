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
