import { IActionFail, IActionStart, IActionSuccess } from "../rootTypes";

/* STORE */
/* ------- */
export interface IReservationsStore {
  reservations: IReservations[];
  error?: string;
}

export interface IReservations {
  id?: string;
  start: string;
  end: string;
  room: IRooms;
}

export interface IRooms {
  id: string;
  name: string;
  imageUrl: string;
}

/* ------- */

/* ACTIONS */
/* ------- */
export enum ReservationActionTypes {
  LOAD_RESERVATIONS_START = "LOAD_RESERVATIONS_START",
  LOAD_RESERVATIONS_SUCCESS = "LOAD_RESERVATIONS_SUCCESS",
  LOAD_RESERVATIONS_FAIL = "LOAD_RESERVATIONS_FAIL",
  ADD_RESERVATIONS_START = "ADD_RESERVATIONS_START",
  ADD_RESERVATIONS_SUCCESS = "ADD_RESERVATIONS_SUCCESS",
  ADD_RESERVATIONS_FAIL = "ADD_RESERVATIONS_FAIL",
}

export type Action =
  | IActionStart<ReservationActionTypes.LOAD_RESERVATIONS_START, undefined>
  | IActionSuccess<
      ReservationActionTypes.LOAD_RESERVATIONS_SUCCESS,
      IReservations[]
    >
  | IActionFail<ReservationActionTypes.LOAD_RESERVATIONS_FAIL, string>
  | IActionSuccess<
      ReservationActionTypes.ADD_RESERVATIONS_SUCCESS,
      IReservations
    >;
/* ------- */

/* PAYLOAD */
/* ------- */

/* ------- */
