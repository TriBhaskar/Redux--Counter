import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const initialAuthenticationState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Configure the store with the counter reducer
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
