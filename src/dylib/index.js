const path = require('path');
const ffi = require('ffi-napi');

const libPath = path.resolve(process.cwd(), 'dylib', 'libctss.dylib');
const mylib = ffi.Library(libPath, {
  'hello': [
    'string',
    []
  ],
  'keygen': [
    'string',
    [
      'string', // server_url
      'string', // room
      'int', // index
      'int', // threshold
      'int', // number_of_parties
    ]
  ],
  'sign': [
    'string',
    [
      'string', // server_url
      'string', // room
      'string', // local_share
      'string', // parties
      'string', // data
    ]
  ]
})

module.exports = mylib;