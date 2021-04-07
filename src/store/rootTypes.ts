export interface IActionStart<T, P> {
  type: T;
  payload?: P;
}

export interface IActionSuccess<T, P> {
  type: T;
  payload: P;
}

export interface IActionFail<T, P> {
  type: T;
  payload: P;
}
