import React from 'react'
import { connect } from 'dva'

function mapStateToProps(state) {
  const { name } = state.index
  return {
    name
  }
}

const IndexPage = ({dispatch, name}) => {
  return (
    <div>
      {name}
    </div>
  );
};

IndexPage.propTypes = {
}

export default connect(mapStateToProps)(IndexPage)
