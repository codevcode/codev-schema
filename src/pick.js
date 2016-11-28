const get = require('lodash/get')

function pick (schema) {
  return Object.assign(
    {},
    schema,
    {
      contents: {
        age: get(schema, 'contents.age'),
      },
    }
  )
}

module.exports = pick
