# Built-in Function

## 1 Number()
Mengkonversi nilai menjadi angka. Contoh: Number("25") --> 25

## 2 String()
Mengkonversi nilai menjadi string. Contoh: String(123) --> "123"

## 3 Boolean()
Mengkonversi nilai menjadi boolean. Contoh: Boolean(1) --> true

## 4 isNaN()
Memeriksa apakah nilai merupakan NaN (Not a Number). Contoh: isNaN("halo") --> true

## 5 isFinite()
Memeriksa apakah nilai merupakan angka tak hingga atau bukan. Contoh: isFinite(100) --> true

# Built-in Method
## 1 toUpperCase()
Mengubah teks menjadi kapital. Contoh: "kairn".toUpperCase() --> "KAIRN"

## 2 toLowerCase()
Mengubah teks menjadi kapitil. contoh: "KAIRN".toLowerCase() --> "kairn"

## 3 slice()
Mengambil sebagian karakter. Contoh: "Koda".slice(2) --> "da"

## 4 includes()
Memeriksa apakah memiliki nilai. Contoh: "Halo, saya Kairn".includes("ay") --> true

## 5 trim()
Menghapus spasi diawal dan akhir. Contoh : " Halo, saya Kairn. ".trim() --> "Halo, saya Kairn."

## 6 push()
Menambah elemen di akhir dan menghitung panjang nya. Contoh: ["a", "b"].push(c) --> 3

## 7 pop()
Mengeluarkan elemen di akhir.
Contoh: 
const arr = ["a", "b", "c"]
console.log(arr.pop()) --> c
console.log(arr) --> ["a", "b"]

## 8 unshift()
Menambahkan elemen di awal dan menghitung panjang nya. Contoh: [2, 3].inshift(1) --> 3

## 9 shift()
Menghapus elemen pertama.
Contoh:
const arr = [1, 2, 3]
console.log(arr.shift()) --> 1
console.log(arr) --> [2, 3]

## 10 indexOf()
Memeriksa keberadaan elemen.
Contoh: ["a", "b"].indexOf("b) -- 1

## 11 join()
Menggabungkan elemen menjadi string. Contoh: ["a", "b"].join("-") --> "a-b"

## 12 JSON.stringify()
Mengubah javascript menjadi string JSON. Contoh: JSON.stringify({nama: "Kairn"}) --> '{"nama": "Kairn"}'

## 13 charAt()
Mengambil karakter berdasarkan indeks. Contoh: "Kairn".charAt(1) --> "a"

## 14 at()
Mengambil karakter berdasarkan indeks, termasuk indeks negatif. Contoh: "Kairn".at(-1) --> "n"

## 15 repeat()
Mengulang teks. Contoh: "ha".repeat(3) --> "hahaha"

## 16 substring()
Mengambil bagian teks berdasarkan indeks. Contoh: "Kairn".substring(0,3) --> "Kai"

## 17 sort()
Mengurutkan elemen array. Contoh: [4, 1, 7, 5].sort() --> [1, 4, 5, 7]

## 18 filter()
Mengambil semua elemen yang memenuhi kondisi. Contoh: [1, 2, 3, 4].filter(n => n > 2) --> [3, 4]

## 19 map()
Membuat array baru dari hasil transformasi elemen. Contoh: [1, 2, 3, 4].map(n => n * 2) --> [2, 4, 6, 8]

## 20 toFixed()
Membatasi angka desimal. 
Contoh:
```
(3.14159).toFixed(2) --> "3.14"
(1.56472.toFixed(3)) --> "1.564"
```