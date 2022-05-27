import {
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESSFULL,
  VERIFY_EMAIL_FAILED,
} from "./actionTypes"

const initialState = {
  verifyError: null,
  message: null,
  loading: false,
  user: null,
}

const Verify = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_EMAIL:
      state = {
        ...state,
        loading: true,
        verifyError: null,
      }
      break
    case VERIFY_EMAIL_SUCCESSFULL:
      state = {
        ...state,
        loading: false,
        user: action.payload,
        verifyError: null,
      }
      break
    case VERIFY_EMAIL_FAILED:
      state = {
        ...state,
        user: null,
        loading: false,
        verifyError: action.payload,
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default Verify
