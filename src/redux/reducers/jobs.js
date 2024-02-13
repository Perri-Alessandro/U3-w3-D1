import { ADD_TO_FINDED } from "../actions";
import { RESET_FINDED } from "../actions";

const initialState = {
  content: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FINDED:
      return {
        ...state,

        content: [...state.content, action.payload], //comma = concat
      };
    case RESET_FINDED:
      return {
        ...state,

        content: state.content.filter(
          (job, i) => i !== action.payload //tengo tutti i job tranne quello che ha action.payload (indice attuale)
        ),
      };
    default:
      return state;
  }
};
export default jobReducer;
