import React from 'react'

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading-pic" src={require('../assets/loading.svg')} alt="loading"/>
    </div>
  )
}

export default Loading