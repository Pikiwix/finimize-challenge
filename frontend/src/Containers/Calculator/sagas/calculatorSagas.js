import { call, put } from 'redux-saga/effects'
import * as calculatorApi from '../api/calculatorApi'
import * as actionTypes from '../../../actions/actionsIndex'

// ****** SAGAS ******
export function * getCalculation (action) {
  try {
    yield put({type: actionTypes.SHOW_LOADER})
    const calculations = yield call(calculatorApi.calculate, action.payload)
    yield put({type: actionTypes.CALCULATOR_SET_CALCULATION, payload: calculations.data})
    yield put({type: actionTypes.HIDE_LOADER})
  } catch (err) {
    yield put({type: actionTypes.CALCULATOR_GET_CALCULATION_ERROR})
    yield put({type: actionTypes.HIDE_LOADER})
  }
}
