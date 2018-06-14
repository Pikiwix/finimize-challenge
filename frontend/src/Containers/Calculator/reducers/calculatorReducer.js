import * as types from '../actions/calculatorActions'

const initialState = {
  loading: true,
  calculationData: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CALCULATOR_SET_CALCULATION:
      return state
    default:
      return state
  }
}
