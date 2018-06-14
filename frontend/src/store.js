import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers/reducersIndex'
import sagas from './sagas/sagaIndex'

let middlewares = []

const sagaMiddleware = typeof createSagaMiddleware === 'function' ? createSagaMiddleware() : createSagaMiddleware.default()
middlewares.push(sagaMiddleware)

const history = createHistory()
const routingMiddleware = routerMiddleware(history)
middlewares.push(routingMiddleware)

let middleware = applyMiddleware(...middlewares)

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension())
}

const store = createStore(reducers, middleware)
sagaMiddleware.run(sagas)

export { store, history }
