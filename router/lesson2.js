const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const router = express()

router.get('/', (req, res, next) => {
  superagent.get('https://cnodejs.org')
    .end((err, sres) => {
      if (err) {
        return next(err)
      }

      // sres.text 储存html内容, 
      // $ 就是jQ
      var $ = cheerio.load(sres.text)
      var items = []
      $('#topic_list .cell').each((idx, element) => {
        var topic_Title = $(element).find('.topic_title')
        var user_Name = $(element).find('.user_avatar img')
        
        items.push({
          title: topic_Title.attr('title'),
          href: topic_Title.attr('href'),
          author: user_Name.attr('title')
        })
      })
      res.send(items)
    })
})

module.exports = router
