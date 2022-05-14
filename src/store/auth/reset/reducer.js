import {
  RESET_USER,
  RESET_USER_SUCCESSFUL,
  RESET_USER_FAILED,
} from "./actionTypes"

const initialState = {
  resetError: null,
  message: null,
  loading: false,
  user: null,
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
        user: action.payload,
        resetError: null,
      }
      break
    case RESET_USER_FAILED:
      state = {
        ...state,
        user: null,
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
