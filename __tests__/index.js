const terbilang = require('../index');

test.each([
  [1, "Satu"],
  [11, "Sebelas"],
  [111, "Seratus Sebelas"],
  [1111, "Seribu Seratus Sebelas"],
  [11111, "Sebelas Ribu Seratus Sebelas"],
  [111111, "Seratus Sebelas Ribu Seratus Sebelas"],
  [1111111, "Satu Juta Seratus Sebelas Ribu Seratus Sebelas"],
  [11111111, "Sebelas Juta Seratus Sebelas Ribu Seratus Sebelas"],
  [111111111, "Seratus Sebelas Juta Seratus Sebelas Ribu Seratus Sebelas"],
  [1111111111, "Satu Milyar Seratus Sebelas Juta Seratus Sebelas Ribu Seratus Sebelas"],
  [1, "Satu"],
  [101, "Seratus Satu"],
  [1001, "Seribu Satu"],
  [10001, "Sepuluh Ribu Satu"],
  [100001, "Seratus Ribu Satu"],
  [1000001, "Satu Juta Satu"],
  [10000001, "Sepuluh Juta Satu"],
  [100000001, "Seratus Juta Satu"],
  [1000000001, "Satu Milyar Satu"],
  [1, "Satu"],
  [101, "Seratus Satu"],
  [1010, "Seribu Sepuluh"],
  [10101, "Sepuluh Ribu Seratus Satu"],
  [101010, "Seratus Satu Ribu Sepuluh"],
  [1010101, "Satu Juta Sepuluh Ribu Seratus Satu"],
  [10101010, "Sepuluh Juta Seratus Satu Ribu Sepuluh"],
  [101010101, "Seratus Satu Juta Sepuluh Ribu Seratus Satu"],
  [1010101010, "Satu Milyar Sepuluh Juta Seratus Satu Ribu Sepuluh"],
])('Terbilang %i', (number, expected) => {
  expect(terbilang(number)).toBe(expected);
});
