import getParams from './getParams'

test('getParams', () => {
  expect(getParams('name', 'https://www.jd.com?name=zx')).toMatch(/zx/)
  expect(getParams('age', 'https://www.jd.com?name=zx')).toBe(null)
  expect(getParams('age', 'https://www.jd.com?name=zx&age=18')).toMatch(/18/)
  expect(getParams('name', 'https://http://etc.jd.com?name=zx&age=18/#/entranceHome?addr=beijing')).toMatch(/zx/)
  expect(getParams('age', 'https://http://etc.jd.com?name=zx&age=18/#/entranceHome?addr=beijing')).toMatch(/18/)
  expect(getParams('addr', 'https://http://etc.jd.com?name=zx&age=18/#/entranceHome?addr=beijing')).toMatch(/beijing/)
})
