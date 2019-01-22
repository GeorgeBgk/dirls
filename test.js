import test from 'ava'

const dirls = require('.')

test('returns correct directory data', t => {
  const ls = dirls('testdir')
  t.is(ls[0].name, 'adirectory', 'directory name')
  t.is(ls[0].type, 'directory', 'directory type')
})
test('returns correct file data', t => {
  const ls = dirls('testdir')
  t.is(ls[1].name, 'file.txt', 'file name')
  t.is(ls[1].type, 'file', 'file type')
})
