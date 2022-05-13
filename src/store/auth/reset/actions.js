import {
  RESET_USER,
  RESET_USER_SUCCESSFUL,
  RESET_USER_FAILED,
} from "./actionTypes"

export const resetUser = values => {
  return {
    type: RESET_USER,
    payload: values,
  }
}

export const resetUserSuccessful = values => {
  return {
    type: RESET_USER_SUCCESSFUL,
    payload: values,
  }
}

export const resetUserFailed = errorObj => {
  return {
    type: RESET_USER_FAILED,
    payload: errorObj,
  }
}
