import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import calculatorReducer from '../Containers/Calculator/reducers/calculatorReducer.js'
import uiReducer from './reducerUI'

export default combineReducers({
  router: routerReducer,
  calculator: calculatorReducer,
  ui: uiReducer
})
