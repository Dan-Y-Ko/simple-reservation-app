import { combineReducers } from "redux";

import reservationsReducer from "./reservations/reservationsReducer";

const rootReducer = combineReducers({
  reservations: reservationsReducer,
});

export default rootReducer;
