import * as types from '../actions/commonActions'

const initialState = {
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
    case types.HIDE_LOADER:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
