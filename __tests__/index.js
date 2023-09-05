const terbilang = require('../terbilang');

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
  [101, "Seratus Satu"],
])('Terbilang %i', (number, expected) => {
  expect(terbilang(number)).toBe(expected);
});
