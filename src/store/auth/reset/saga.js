import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Reset Redux states
import { RESET_USER } from "./actionTypes"
import { resetUserSuccessful, resetUserFailed } from "./actions"

import {
  postJwtReset,
} from "../../../helpers/backend_helper"
import { POST_RESET } from "../../../helpers/url_helper"

// Is user reset successfull then direct plot user in redux.
function* resetUser({ payload: { user } }) {
  if (user.password !== user.confirmPassword) {
    return yield put(resetUserFailed('Password and Confirm password does not match'))
  }
  if (user.password.legth < 6) {
    return yield put(resetUserFailed('Password length should be >= six characters'))
  }
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtReset, POST_RESET, user)
      yield put(resetUserSuccessful(response.message))
      console.log(response.message)
    }
  } catch (error) {
    yield put(resetUserFailed('Invalid Token'))
  }
}

export function* watchUserReset() {
  yield takeEvery(RESET_USER, resetUser)
}

function* resetSaga() {
  yield all([fork(watchUserReset)])
}

export default resetSaga
