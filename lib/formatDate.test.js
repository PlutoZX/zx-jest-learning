import formatDate from './formatDate'

test('formatDate', () => {
  expect(formatDate('YYYY-MM-DD hh:mm:ss', 1500000000000)).toMatch(/2017-07-14 10:40:00/)
  expect(formatDate('YYYY/MM/DD hh/mm/ss', 1500000000000)).toMatch(/2017\/07\/14 10\/40\/00/)
})
