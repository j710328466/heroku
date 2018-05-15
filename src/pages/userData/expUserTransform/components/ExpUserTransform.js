import { connect } from 'dva'

function mapStateToProps(state) {
  const { test } = state.expUserTransform
  return {
    test,
  }
}

function ExpUserTransform({dispatch, test}) {
  return (
    <div>
      {test}
    </div>
  )
}


export default connect(mapStateToProps)(ExpUserTransform)
