import {
  RESET_USER,
  RESET_USER_SUCCESSFUL,
  RESET_USER_FAILED,
} from "./actionTypes"

const initialState = {
  resetError: null,
  message: null,
  loading: false,
  result: null,
}

const reset = (state = initialState, action) => {
  switch (action.type) {
    case RESET_USER:
      state = {
        ...state,
        loading: true,
        resetError: null,
      }
      break
    case RESET_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        result: action.payload,
        resetError: null,
      }
      break
    case RESET_USER_FAILED:
      state = {
        ...state,
        result: null,
        loading: false,
        resetError: action.payload,
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default reset
