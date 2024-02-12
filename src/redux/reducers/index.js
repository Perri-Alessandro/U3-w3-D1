const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload], //comma = concat
        },
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter(
            (job, i) => i !== action.payload //tengo tutti i job tranne quello che ha action.payload (indice attuale)
          ),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
