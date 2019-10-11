import React from 'react'
import { render } from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderToString } from 'react-dom/server'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './routes'
import reducers from './redux/reducers'
import sagas from './redux/sagas'

const sagaMiddleware = createSagaMiddleware(0)
const store = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  )
}

render(<AppRouter />, document.getElementById('root'))


