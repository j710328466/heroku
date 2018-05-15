
export default {

  namespace: 'index',

  state: {
    name: '数据概况'
  },

  effects: {
    *fetch ({ payload: {params} }, { call, put } ) {
      // const {data, headers } = yield call(indexPageService.getLeftMenu, params)
      // yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
        }
      })
    },
  }
};
