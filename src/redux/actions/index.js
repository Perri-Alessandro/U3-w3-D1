export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FINDED = "ADD_TO_FINDED ";
export const RESET_FINDED = "RESET_FINDED";

export const addToFavoriteAction = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const removeToFavoriteAction = (job) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: job,
  };
};

export const addToFindedAction = (finded) => {
  return {
    type: ADD_TO_FINDED,
    payload: finded,
  };
};

export const resetFindedAction = () => {
  return {
    type: RESET_FINDED,
  };
};
