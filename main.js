let barang = ["hp", "charger", "earphone"];
barang.shift();
barang.push("case");
delete barang[1];
console.log(barang);

let a = 15;
let b = 10;

let tambah = a + b;
let kurang = a - b;
let kali = a * b;
let bagi = a / b;

let lebihbesar = a > b;
let lebihkecil = a < b;
let samadengan = a === b;

console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);
console.log(lebihbesar);
console.log(lebihkecil);
console.log(samadengan);

let pengguna = {
  nama: "Andi",
  usia: 19,
  alamat: {
    jalan: "Silas Papare",
    Kota: "Biak",
  },
  hoby: ["jalan jalan", "ngabisin duit"],
};
console.log(pengguna);
