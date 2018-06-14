import * as types from '../actions/calculatorActions'

const initialState = {
  calculationData: {},
  errors: undefined
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CALCULATOR_SET_CALCULATION:
      return {
        ...state,
        calculationData: action.payload,
        errors: undefined
      }
    case types.CALCULATOR_GET_CALCULATION_ERROR:
      return {
        ...state,
        errors: 'Couldn\'t get the calculation for the given data, please retry or contact an administrator'
      }
    default:
      return state
  }
}
