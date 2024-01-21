import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter
const intialState = { counter: 0, showCounter: true };

// Create a slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    // Increment the counter
    increment(state) {
      state.counter++;
    },
    // Decrement the counter
    decrement(state) {
      state.counter--;
    },
    // Increase the counter by a specified amount
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    // Toggle the visibility of the counter
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Configure the store with the counter reducer
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
