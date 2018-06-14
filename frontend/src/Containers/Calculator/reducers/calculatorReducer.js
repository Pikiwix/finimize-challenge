import * as types from '../actions/calculatorActions'

const initialState = {
  calculationData: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CALCULATOR_SET_CALCULATION:
      return {
        ...state,
        calculationData: action.payload
      }
    default:
      return state
  }
}
