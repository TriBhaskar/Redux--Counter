import { createSlice } from "@reduxjs/toolkit";
// Define the initial state for the counter
const initialCounterState = { counter: 0, showCounter: true };

// Create a slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
