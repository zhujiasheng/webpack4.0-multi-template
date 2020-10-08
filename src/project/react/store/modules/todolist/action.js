import { COUNT_ADD, COUNT_DECE } from "./actionType";

export const handleAdd = (dispatch) => {
  dispatch({ type: COUNT_ADD });
};

export const handleDece = (dispatch) => {
  dispatch({ type: COUNT_DECE });
};
