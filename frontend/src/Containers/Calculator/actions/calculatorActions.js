/*
 * Actions for calculator feature
 */

export const CALCULATOR_GET_CALCULATION = 'CALCULATOR_GET_CALCULATION'
export const CALCULATOR_SET_CALCULATION = 'CALCULATOR_SET_CALCULATION'
export const CALCULATOR_GET_CALCULATION_ERROR = 'CALCULATOR_GET_CALCULATION_ERROR'

export const getCalculations = (data) => {
  return {
    type: CALCULATOR_GET_CALCULATION,
    payload: data
  }
}
