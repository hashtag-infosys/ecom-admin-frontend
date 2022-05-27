import {
 VERIFY_EMAIL,
 VERIFY_EMAIL_SUCCESSFULL,
 VERIFY_EMAIL_FAILED,
} from "./actionTypes"

export const verifyEmail = user => {
  return {
    type:VERIFY_EMAIL,
    payload: { user },
  }
}

export const verifyEmailSuccessfull = user => {
  return {
    type:VERIFY_EMAIL_SUCCESSFULL,
    payload: user,
  }
}

export const verifyEmailFailed = errorObj => {
  return {
    type:VERIFY_EMAIL_FAILED,
    payload: errorObj,
  }
}
