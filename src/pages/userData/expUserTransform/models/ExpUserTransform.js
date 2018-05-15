export default {
  namespace: 'expUserTransform',
  state: {
    test: '测试数据',
    query: ''
  },
  // 同步事件
  reducers: {
    save(state, {payload: query}) {
      return {...state, query}
    }
  },
  effects: {
    *test({payload: query}, {call, put}) {
      yield put({type: 'save', payload: query})
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/userData/expUserTransform') {
          dispatch({ type: 'save', payload: query})
        }
      })
    }
  }
}