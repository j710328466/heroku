const express = require('express')
const async = require('async')
const router = express()

var urls = []
for (let i = 0; i < 30; i++) {
  urls.push('http://datasourcec_' + i)
}

router.get('/', (req, res) => {
  async.mapLimit(urls, 3, (url, callback) => {
    fetchUrl(url, callback)
  }, (err, result) => {
    console.log('final:')
    console.log(result)
  })
})

var concurrencyCount = 0
function fetchUrl(url, callback) {
  var delay = parseInt((Math.random() * 10000000) % 2000)
  concurrencyCount++
  console.log('现在的并发数是:', concurrencyCount, '，正在抓取的是:', url, '，耗时' + delay + '毫秒');
  setTimeout(() => {
    concurrencyCount--
    callback(null, url + '.html')
  }, delay)
}

module.exports = router
