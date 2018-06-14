import { takeLatest, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionsIndex'
import * as calculatorSagas from '../Containers/Calculator/sagas/calculatorSagas'

export default function * root () {
  yield all([
    takeLatest(actionTypes.CALCULATOR_GET_CALCULATION, calculatorSagas.getCalculation)
  ])
}
