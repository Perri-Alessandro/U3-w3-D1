export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FINDED = "ADD_TO_FINDED ";
export const RESET_FINDED = "RESET_FINDED";

export const addToFavoriteAction = (displayTitle) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: displayTitle,
  };
};

export const removeToFavoriteAction = (i) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: i,
  };
};

export const addToFindedAction = (query) => {
  return async (dispatch) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");

      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: ADD_TO_FINDED,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
  };
};

export const resetFindedAction = () => {
  return {
    type: RESET_FINDED,
  };
};
