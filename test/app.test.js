const app = require('../app')
const supertest = require('supertest')
const should = require('should')

// 调用API，功能和superagent一致
const request = supertest(app)
const agent = supertest.agent(app)

// 边界条件测试
var testFib = (n, statusCode, expect, done) => {
  request.get('/lesson5')
    .query({ n: n })
    .expect(statusCode)
    .end((err, res) => {
      res.text.should.equal(expect)
      done(err)
    })
}

describe('test/app.test.js', () => {
  it('should return 55 when n = 10', (done) => {
    // 测试内容涉及了异步调用，但是mocha无法感知，所以我们接受他的 
    // done 函数，以示结束

    request.get('/lesson5')
      // .query 方法来传 querystring， send 来传body
      .query({ n: 10 })
      .end((err, res) => {
        // 由于 http 返回的是 String
        res.text.should.equal('55')

        done(err)
      })
  })

  it('should return 0 when n === 0', (done) => {
    testFib(0, 200, '0', done)
  })
  it('should equal 1 when n === 1', (done) => {
    testFib(1, 200, '1', done)
  })
  it('should equal 55 when n === 10', (done) => {
    testFib(10, 200, '55', done)
  })
  it('should throw when n > 10', (done) => {
    testFib(11, 500, 'n should <= 10', done)
  })
  it('should throw when n < 0', (done) => {
    testFib(-1, 500, 'n should >= 0', done)
  })
  it('should throw when n isnt Number', (done) => {
    testFib('good', 500, 'n should be a Number', done)
  })

  it('should status 500 when error', (done) => {
    request.get('/lesson5')
      .query({n: 100})
      .expect(500)
      .end((err, res) => {
        done(err)
      })
  })
})


