import { all, call, takeLatest, put } from "redux-saga/effects";

import { loadRequest } from "../rootRequests";
import { ReservationActionTypes, IReservations } from "./reservationsTypes";

export function* loadReservationsSaga() {
  try {
    const reservationsPayload: IReservations[] = yield loadRequest<IReservations>(
      "reservations"
    );

    yield put({
      type: ReservationActionTypes.LOAD_RESERVATIONS_SUCCESS,
      payload: reservationsPayload,
    });
  } catch (error) {
    yield put({
      type: ReservationActionTypes.LOAD_RESERVATIONS_FAIL,
      payload: error,
    });
  }
}

export function* onLoadReservationsStart() {
  yield takeLatest(
    ReservationActionTypes.LOAD_RESERVATIONS_START,
    loadReservationsSaga
  );
}

export function* reservationsSagas() {
  yield all([call(onLoadReservationsStart)]);
}
