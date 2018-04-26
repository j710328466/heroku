const crypto = require('crypto')

exports.encrypto = (data, key) => {
  return crypto.publicEncrypt(key, Buffer.from(data))
}

exports.decrypto = (encrypted, key) => {
  return crypto.privateDecrypt(key, encrypted)
}