const ones = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
const teens = ["Sepuluh", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
const thousands = ["", "Ribu", "Juta", "Milyar"];
const commas = ["Nol", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];

function convertLessThanThousand(num) {
  if (num === 0) return "";
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  const firstDigit = Math.floor(num / 100);
  const secondDigit = Math.floor((num % 100) / 10);
  const thirdDigit = num % 10;
  let result = [];
  if (firstDigit > 0) {
    result.push(`${ones[firstDigit]} Ratus`);
  }
  if (secondDigit > 1) {
    result.push(`${ones[secondDigit]} Puluh`);
  } else if (secondDigit === 1) {
    result.push(`${teens[thirdDigit]}`);
    return result.join(' ');
  }
  if (thirdDigit > 0) {
    result.push(`${ones[thirdDigit]}`);
  }
  return result.join(' ');
}

const convertAfterCommasToWords = (number) => {
  if (number === 0) return "Nol";
  let result = "";
  let i = 0;
  while (number > 0) {
    const part = number % 1000;
    if (part > 0) {
      if (i > 0) {
        result = thousands[i] + " " + result;
      }
      if (thousands[i] === 'Ribu' && part === 1) {
        result = 'Se ' + result;
      } else {
        result = convertLessThanThousand(part) + " " + result;
      }
    }
    number = Math.floor(number / 1000);
    i++;
  }
  return result;
}

const getNumbers = (number) => {
  return number.toString().split(".");
}

const convertCommaToWords = (number) => {
  let result = ['Koma'];
  number.split('').forEach((num) => {
    result.push(commas[num]);
  })
  return result.join(' ');
}

function convertToWords(number) {
  const numbers = getNumbers(number);
  let result = convertAfterCommasToWords(parseInt(numbers[0])).trim();
  if (numbers[1]) {
    result = result + " " + convertCommaToWords(numbers[1]);
  }
  return result;
}

const terbilang = (number) => {
  return convertToWords(number)
    .replaceAll('Se Ribu', 'Seribu')
    .replaceAll("Satu Ratus", "Seratus")
    .replaceAll("Satu Puluh", "Sepuluh").trim();
}

module.exports = terbilang;
