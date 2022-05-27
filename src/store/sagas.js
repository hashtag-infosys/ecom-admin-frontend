import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import ResetSaga from "./auth/reset/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import calendarSaga from "./calendar/saga"
import chatSaga from "./chat/saga"
import tasksSaga from "./tasks/saga"
import contactsSaga from "./contacts/saga"
import VerifyEmailSaga from "./auth/verifyemail/saga"

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    ResetSaga(),
    fork(AuthSaga),
    ProfileSaga(),
    ForgetSaga(),
    VerifyEmailSaga(),
    fork(LayoutSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(tasksSaga),
    fork(contactsSaga),
  ])
}
