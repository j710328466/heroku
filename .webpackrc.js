export default {
  // 路由代理
  "proxy": {
  },
  // 主题定制
  "theme": {
    // "primary-color": "#7546c9"
  },
  "env": {
    "development": {
      "define": {
        "env": process.env.JIMI_ENV,
      }
    },
    "production": {
      "define": {
        "env": process.env.JIMI_ENV,
      }
    }
  }
}
