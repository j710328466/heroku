const express = require('express')
const router = express()

router.get('/', (req, res) => {
  if (req.cookies.isVisit) {
    console.log(req.cookies.isVisit)
    res.send('欢迎再次访问！')
  } else {
    res.cookie('isVisit', 1, {
      maxAge: 10 * 1000,
      // secure: true,
      // path: 'localhost',
      // httpOnly: true
    })
    res.send('欢迎第一次访问！')
  }
})

router.get('/session', (req, res) => {
  console.log(req.session);
  if (req.session.isVisit) {
    req.session.isVisit++;
    res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
  } else {
    req.session.isVisit = 1;
    res.send("欢迎第一次来这里");
    console.log(req.session);
  }
})

module.exports = router
