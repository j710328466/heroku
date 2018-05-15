import { Route } from 'react-router-dom'
import Redirect from 'umi/redirect'

export default (args) => {
  const { render } = args;
  return <Route
    render={props =>
      localStorage.getItem('userId') ?
      <div>
        {render(props)}
      </div>
      :
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    }
  />;
}