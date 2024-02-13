import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "../reducers/jobs";
import favoriteReducer from "../reducers/favorites";

const globalReducer = combineReducers({
  favorites: favoriteReducer,
  jobs: jobReducer,
  // "jobs" sarà il nome della sua slice
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
