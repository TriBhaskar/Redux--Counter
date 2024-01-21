import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// Configure the store with the counter reducer
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
