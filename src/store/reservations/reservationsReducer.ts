import {
  Action,
  ReservationActionTypes,
  IReservationsStore,
} from "./reservationsTypes";

const initialState: IReservationsStore = {
  reservations: [],
  error: undefined,
};

const reservationsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ReservationActionTypes.LOAD_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: action.payload,
        error: undefined,
      };
    case ReservationActionTypes.LOAD_RESERVATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ReservationActionTypes.ADD_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: [...state.reservations, { ...action.payload }],
        error: undefined,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
