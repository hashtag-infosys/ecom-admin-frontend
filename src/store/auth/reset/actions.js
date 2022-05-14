import {
  RESET_USER,
  RESET_USER_SUCCESSFUL,
  RESET_USER_FAILED,
} from "./actionTypes"

export const resetUser = user => {
  return {
    type: RESET_USER,
    payload: { user },
  }
}

export const resetUserSuccessful = user => {
  return {
    type: RESET_USER_SUCCESSFUL,
    payload: user,
  }
}

export const resetUserFailed = errorObj => {
  return {
    type: RESET_USER_FAILED,
    payload: errorObj,
  }
}
