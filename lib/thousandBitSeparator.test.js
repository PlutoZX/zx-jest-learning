import thousandBitSeparator from './thousandBitSeparator'

test('thousandBitSeparator', () => {
  expect(thousandBitSeparator(0)).toMatch(/0.00/);
  expect(thousandBitSeparator(1)).toMatch(/1.00/);
  expect(thousandBitSeparator(10)).toMatch(/10.00/);
  expect(thousandBitSeparator(100)).toMatch(/100.00/);
  expect(thousandBitSeparator(1000)).toMatch(/1,000.00/);
  expect(thousandBitSeparator(123456)).toMatch(/123,456.00/);
});
