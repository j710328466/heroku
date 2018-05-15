/* eslint-disable no-undef */
const host = (() => {
  if (env === 'dev') {
    return {
      devUrl: 'https://www.easy-mock.com/mock/5af8f1b652c5bd051e93f6bf/jm',
      BIPwd: 'UW8lRA1rP6JX9oVP7KmlbPGaBW8rPwVv'
      // apiUrl: 'http://121.41.54.80:8500',
      // miguUrl: 'http://recycle.dev.jimistore.com',
      // ossUrl: 'https://product.jimistore.com',
      // miguModelUrl: 'http://migu.jimistore.com/api/test/model/',
      // imgUrl: 'http://api.test.jimistore.com:4999/',

    };
  } else if (env === 'test') {
    return {
      BIPwd: 'UW8lRA1rP6JX9oVP7KmlbPGaBW8rPwVv',
      testUrl: 'biwork-api.test.jimistore.com:21099'
      // apiUrl: 'http://api.test.jimistore.com:8500',
      // miguUrl: 'http://recycle.test.jimistore.com',
      // ipUrl: 'http://recycle.dev.jimistore.com',
      // couponUrl: 'http://coupon-api.test.jimistore.com',
      // ossUrl: 'https://product.jimistore.com',
      // miguModelUrl: 'http://migu.jimistore.com/api/test/model/',
      // mibaoUrl: 'http://api.test.jimistore.com:22054',
      // imgUrl: 'http://api.test.jimistore.com:4999/',
      // miguPwd: 'retzNI7yFCZ1hNcKq84OwOFZ9sWFoCfp',
    };
  } else if (env === 'pro') {
    return {
      BIPwd: 'UW8lRA1rP6JX9oVP7KmlbPGaBW8rPwVv'
      // apiUrl: 'https://manager.jimistore.com',
      // miguUrl: 'https://recycle-api.jimistore.com',
      // couponUrl: 'https://coupon-api.jimistore.com',
      // ossUrl: 'https://product.jimistore.com',
      // miguModelUrl: 'http://migu.jimistore.com/api/model/',
      // mibaoUrl: 'https://riskcontrol-api.jimistore.com',
      // imgUrl: 'https://common.jimistore.com/',
      // miguPwd: 'H8g5NlaiOWXPSmNERk3pDzfqOH4WuECX',
    };
  } else if (env === 'sbox') {
    return {
      BIPwd: 'UW8lRA1rP6JX9oVP7KmlbPGaBW8rPwVv'
      // apiUrl: 'https://testmanager.jimistore.com',
      // miguUrl: 'https://recycle-api.jimistore.com',
      // couponUrl: 'https://coupon-api.jimistore.com',
      // ossUrl: 'https://product.jimistore.com',
      // mibaoUrl: 'http://114.55.95.151:23054',
      // miguModelUrl: 'http://migu.jimistore.com/model/',
      // imgUrl: 'https://common.jimistore.com/',
      // miguPwd: 'H8g5NlaiOWXPSmNERk3pDzfqOH4WuECX',
    };
  }
  return null;
})();

export default host;

