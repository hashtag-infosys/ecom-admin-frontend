import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Reset Redux states
import { VERIFY_EMAIL } from "./actionTypes"
import {  verifyEmailFailed, verifyEmailSuccessfull } from "./actions"

import {
  postVerifyEmail,
} from "../../../helpers/backend_helper"
import { POST_VERIFY_EMAIL } from "../../../helpers/url_helper"

// Is user reset successfull then direct plot user in redux.
function* verifyEmail({ payload: { user } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postVerifyEmail, POST_VERIFY_EMAIL, user)
      yield put(verifyEmailSuccessfull(response.message))
      console.log(response.message)
    }
  } catch (error) {
    yield put(verifyEmailFailed('Invalid Token'))
  }
}

export function* watchVerifyEmail() {
  yield takeEvery(VERIFY_EMAIL, verifyEmail)
}

function* VerifyEmailSaga() {
  yield all([fork(watchVerifyEmail)])
}

export default VerifyEmailSaga
