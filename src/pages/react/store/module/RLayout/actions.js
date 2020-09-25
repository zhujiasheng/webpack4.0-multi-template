import { RLAYOUT_CLICK } from "./types";
export const handleRLayoutMenu = (dispatch, pathName, history) => {
  history.push(pathName);
  dispatch({ type: RLAYOUT_CLICK, value: pathName });
};
