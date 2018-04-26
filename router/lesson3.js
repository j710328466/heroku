const express = require('express')
const eventproxy = require('eventproxy');
const superagent = require('superagent')
const cheerio = require('cheerio')
const url = require('url')

const router = express()
const ep = new eventproxy()
const cnodeUrl = 'https://cnodejs.org'

router.get('/', (req, res) => {
  var topicUrls = []
  superagent.get(cnodeUrl)
    .end((err, sres) => {
      if (err) {
        return console.error(err)
      }
      var $ = cheerio.load(sres.text)
      $('#topic_list .topic_title').each((idx, element) => {
        var $element = $(element)
        var href = url.resolve(cnodeUrl, $element.attr('href'))
        // 限制在三个
        if (topicUrls.length < 3) {
          topicUrls.push(href)
        }
      })

      topicUrls.forEach((topicUrl) => {
        superagent.get(topicUrl)
          .end((err, res) => {
            // 每次循环传递两个参数
            ep.emit('topic_html', [topicUrl, res.text])
          })
      })
      // 并发处理
      ep.after('topic_html', topicUrls.length, (topics) => {
        topics = topics.map((topicPair) => {
          // emit 事件传递过来的两个参数，一一对应
          var topicUrl = topicPair[0]
          var topicHtml = topicPair[1]
          var $ = cheerio.load(topicHtml)
          return ({
            title: $('.topic_full_title').text().trim(),
            href: topicUrl,
            comment1: $('.reply_content').eq(0).text().trim(),
            author1: $('.user_avatar img').attr('title'),
            score1: $('.board .big').text().trim()
          })
        })
        res.send(topics)
      })
    })
})

module.exports = router
