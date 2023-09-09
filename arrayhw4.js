// Fungsi untuk menghasilkan nilai random antara 1 dan 100
function getRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

// Fungsi untuk mengisi array dengan 100 nilai random
function fillArray() {
  const arr100 = new Set(); // Menggunakan Set untuk menghindari duplikasi
  while (arr100.size < 100) {
    arr100.add(getRandomValue());
  }
  return Array.from(arr100);
}

// Fungsi untuk membagi array menjadi dua array (genap dan ganjil)
function splitArray(array) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return [evenArray, oddArray];
}

// Fungsi untuk menghitung nilai min pada array
function getMinValue(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// Fungsi untuk menghitung nilai max pada array
function getMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung nilai total pada array
function getTotalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Fungsi untuk menghitung rata-rata pada array
function getAverageValue(array) {
  const total = getTotalValue(array);
  return total / array.length;
}

// Fungsi untuk membandingkan nilai min, max, total, dan rata-rata
function compareValues(array1, array2) {
  const min1 = getMinValue(array1);
  const min2 = getMinValue(array2);
  const max1 = getMaxValue(array1);
  const max2 = getMaxValue(array2);
  const total1 = getTotalValue(array1);
  const total2 = getTotalValue(array2);
  const avg1 = getAverageValue(array1);
  const avg2 = getAverageValue(array2);

  console.log("Perbandingan nilai Min, Max, Total, dan Rata-rata:");
  console.log("Min lebih besar array", min1 > min2 ? "genap" : "ganjil");
  console.log("Max lebih besar array", max1 > max2 ? "genap" : "ganjil");
  console.log("Total memiliki nilai", total1 === total2 ? "sama" : "berbeda");
  console.log("Rata-rata lebih besar array", avg1 > avg2 ? "genap" : "ganjil");
}

// Main program
const arr100 = fillArray();
const [evenArray, oddArray] = splitArray(arr100);

console.log("Array dengan jumlah index 100:", arr100);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);

console.log("Min, Max, Total, Rata-rata pada array genap:");
console.log("Min Genap:", getMinValue(evenArray));
console.log("Max Genap:", getMaxValue(evenArray));
console.log("Total Genap:", getTotalValue(evenArray));
console.log("Rata-rata Genap:", getAverageValue(evenArray));

console.log("Min, Max, Total, Rata-rata pada array ganjil:");
console.log("Min Ganjil:", getMinValue(oddArray));
console.log("Max Ganjil:", getMaxValue(oddArray));
console.log("Total Ganjil:", getTotalValue(oddArray));
console.log("Rata-rata Ganjil:", getAverageValue(oddArray));

compareValues(evenArray, oddArray);