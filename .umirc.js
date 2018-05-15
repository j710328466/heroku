export default {
  hashHistory: true,
  loading: './src/components/Loading.js',
  plugins: [
    'umi-plugin-dva',
    ['umi-plugin-routes', {
      exclude: [
        /models/,
        /services/,
      ],
    }],
  ],
  pages: {
    '/': { Route: './routes/PrivateRoute.js' },
    '/dataAnalysis/channelCount': { Route: './routes/PrivateRoute.js' },
    '/dataAnalysis/transformTrack': { Route: './routes/PrivateRoute.js' },
    '/userData/expUserTransform': { Route: './routes/PrivateRoute.js' },
    '/riskControl/passRate': { Route: './routes/PrivateRoute.js' },
    '/riskControl/overdue': { Route: './routes/PrivateRoute.js' },
    '/riskControl/migrationRate': { Route: './routes/PrivateRoute.js' },
    '/riskControl/returnMachine': { Route: './routes/PrivateRoute.js' },
    '/riskControl/staffKpi': { Route: './routes/PrivateRoute.js' }
  }
}
