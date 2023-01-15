// console.log("halo");

// fungsi(function)
// satu blok program yang berisi fungsi-fungsi

// tugas pak isa, mengerjakan semua function
// due date minggu pagi



// function zodiak(bulan, tanggal) {
//     let hasil = "salah";
//     if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
//         hasil = "zodiak belum dibuat";
//         if (bulan == 1) {
//             hasil = "Capricorn";
//             if (tanggal > 21 && tanggal < 32) {
//                 hasil = "aquarius";
//             }
//         }
//         if (bulan == 2) {
//             hasil = "aquarius";
//             if (tanggal > 19 && tanggal < 32) {
//                 hasil = "pisces";
//             }
//         }
//         if (bulan == 3) {
//             hasil = "pisces";
//             if (tanggal > 19 && tanggal < 32) {
//                 hasil = "aries";
//             }
//         }
//         if (bulan == 4) {
//             hasil = "aries";
//             if (tanggal > 18 && tanggal < 31) {
//                 hasil = "taurus";
//             }
//         }
//     }
//     console.log(hasil);
// }
// zodiak(2, 10);








// function lulus(nilai) {
//     let predikat = "belum ujian";
//     if (nilai > 0 && nilai < 100) {
//         if (nilai >= 75 && nilai <= 100) {
//             predikat = "Anda lulus";
//         } else {
//             predikat = "Anda lulus";
//         }
//     }
//     console.log(predikat);
// }
// lulus(-1);








// function terbilang(bilangan) {

//     bilangan = String(bilangan);
//     let angka = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
//     let kata = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
//     let tingkat = new Array('', 'Ribu', 'Juta', 'Milyar', 'Triliun');

//     let panjang_bilangan = bilangan.length;
//     let kalimat = subkalimat = kata1 = kata2 = kata3 = "";
//     let i = j = 0;

//     /* pengujian panjang bilangan */
//     if (panjang_bilangan > 15) {
//         kalimat = "Diluar Batas";
//         return kalimat;
//     }

//     
//     for (i = 1; i <= panjang_bilangan; i++) {
//         angka[i] = bilangan.substr(-(i), 1);
//     }

//     i = 1;
//     j = 0;
//     kalimat = "";

//     while (i <= panjang_bilangan) {

//         subkalimat = "";
//         kata1 = "";
//         kata2 = "";
//         kata3 = "";

//         /* untuk Ratusan */
//         if (angka[i + 2] != "0") {
//             if (angka[i + 2] == "1") {
//                 kata1 = "Seratus";
//             } else {
//                 kata1 = kata[angka[i + 2]] + " Ratus";
//             }
//         }

//         /* untuk Puluhan atau Belasan */
//         if (angka[i + 1] != "0") {
//             if (angka[i + 1] == "1") {
//                 if (angka[i] == "0") {
//                     kata2 = "Sepuluh";
//                 } else if (angka[i] == "1") {
//                     kata2 = "Sebelas";
//                 } else {
//                     kata2 = kata[angka[i]] + " Belas";
//                 }
//             } else {
//                 kata2 = kata[angka[i + 1]] + " Puluh";
//             }
//         }

//         /* untuk Satuan */
//         if (angka[i] != "0") {
//             if (angka[i + 1] != "1") {
//                 kata3 = kata[angka[i]];
//             }
//         }

//         /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
//         if ((angka[i] != "0") || (angka[i + 1] != "0") || (angka[i + 2] != "0")) {
//             subkalimat = kata1 + " " + kata2 + " " + kata3 + " " + tingkat[j] + " ";
//         }


//         kalimat = subkalimat + kalimat;
//         i = i + 3;
//         j = j + 1;

//     }

//     /* mengganti Satu Ribu jadi Seribu jika diperlukan */
//     if ((angka[5] == "0") && (angka[6] == "0")) {
//         kalimat = kalimat.replace("Satu Ribu", "Seribu");
//     }

//     return (kalimat.trim().replace(/\s{2,}/g, ' '))
// }
// // inspect
// console.log(terbilang(3666));









// Bilangan prima: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 59, 61, 67, 71, 73, 79, 83, 89, 97
// class BilanganPrima {

//     result = [];

//     constructor(n) {
//         this.n = n;
//     }

//     prima() {
//         for (let i = 2; i < this.n; i++) {
//             let flag = 0;

//             for (let j = 2; j < i; j++) {
//                 if (i % j == 0) {
//                     flag = 1;
//                     break;
//                 }

//             }
//             if (i > 1 && flag == 0) {
//                 this.result.push(i);
//             }

//         }
//         return this.result;
//     }
// }
// const data = new BilanganPrima(100);
// console.info(data.prima());