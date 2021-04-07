import { createSelector } from "reselect";

import { IReservationsStore, IRooms } from "./reservationsTypes";

interface SelectReservations {
  reservations: IReservationsStore;
}

// create selector for reservation state
const selectReservations = (state: SelectReservations) => state.reservations;

// filter out unique rooms from revervations data
export const selecUniqueRooms = createSelector(
  [selectReservations],
  ({ reservations }) => {
    const rooms = reservations.map((d) => d.room);

    return removeDuplicates(rooms);
  }
);

export const sortReservationsByDate = createSelector(
  [selectReservations],
  ({ reservations }) =>
    reservations.sort(
      // sort in descending order
      (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
    )
);

// function to remove duplicate object, specifically duplicate rooms
const removeDuplicates = (duplicates: IRooms[]) => {
  const flag: Record<string, boolean> = {};
  const unique: IRooms[] = [];

  // loop through rooms array
  duplicates.forEach((el: IRooms) => {
    // if room name doesn't exist in flag object, set value of true and push to unique array
    if (!flag[el.name]) {
      flag[el.name] = true;
      unique.push(el);
    }
  });

  return unique;
};
