import { all, call } from "redux-saga/effects";

import { reservationsSagas } from "./reservations/reservationsSagas";

export default function* rootSaga() {
  yield all([call(reservationsSagas)]);
}
