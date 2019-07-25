import objNoBlank from './objNoBlank'

test('objNoBlank', () => {
  expect(objNoBlank({
    name: 'a',
    age: 18,
    addr: undefined
  })).toEqual({
    name: 'a',
    age: 18
  });
  expect(objNoBlank({
    name: 'a',
    age: 18,
    addr: null
  })).toEqual({
    name: 'a',
    age: 18
  });
  expect(objNoBlank({
    name: 'a',
    age: 18,
    addr: '啦啦啦啦'
  })).toEqual({
    name: 'a',
    age: 18,
    addr: '啦啦啦啦'
  });
});
