import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'

class AppRoot extends PureComponent {
  history = () => {
    let { history, history: { push }, location: { search }} = this.props
    history.push = args => {
      push({ pathname: args, search })
    }

    return history
  }

  render() {
    const { route } = this.props
    return renderRoutes(route.routes, { history: this.history })
  }
}

const Home = Loadable({
  loader: ()=> import('./containers/Home'),
  loading: () => (<div>LOADING PA MORE...</div>)
})

export default [
  {
    component: AppRoot,
    routes: [
      {
        path: '/home',
        component: import('./containers/Home'),
        exact: true
      }
    ]
  }
]