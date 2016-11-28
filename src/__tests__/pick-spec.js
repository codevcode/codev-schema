const pick = require('../pick')

const { strictEqual: is, deepEqual: deep } = assert

describe('pick', function () {
  it('is a fucntion', function () {
    is(typeof pick, 'function')
  })

  it('top level key', function () {
    const schema = {
      type: 'Object',
      contents: {
        name: { type: 'String' },
        age: { type: 'Number' },
      },
    }

    const result = pick(schema, ['age'])

    const expected = {
      type: 'Object',
      contents: {
        age: { type: 'Number' },
      },
    }

    deep(result, expected)
  })
})
