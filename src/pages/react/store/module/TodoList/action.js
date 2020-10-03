import {
  COUNT_ADD,
  COUNT_DECE,
  BASELIST_CLEAR,
  BASELIST_SELECT,
  BASELIST_ADD,
} from "./actionType";

export const handleAdd = (dispatch, value) => {
  dispatch({ type: COUNT_ADD, value });
};

export const handleDece = (dispatch, value) => {
  dispatch({ type: COUNT_DECE, value });
};

export const handleQueryList = async (dispatch) => {
  let value = await getList(1000);
  dispatch({ type: BASELIST_SELECT, value });
};

export const handleClear = (dispatch) => {
  dispatch({ type: BASELIST_CLEAR });
};

export const handleAddList = (dispatch, name) => {
  dispatch({
    type: BASELIST_ADD,
    value: {
      name,
      age: 99,
    },
  });
};

function getList(time) {
  let rand = Math.ceil(Math.random() * 100);
  let data = Array.from({ length: 10 })
    .fill()
    .reduce((curr) => {
      let temp = {
        name: `name-${rand}`,
        age: `age-${rand}`,
      };
      return [...curr, temp];
    }, []);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
