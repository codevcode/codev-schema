const { pick } = require('../')

const { strictEqual: is } = assert

describe('pick', function () {
  it('is a fucntion', function () {
    is(typeof pick, 'function')
  })
})
