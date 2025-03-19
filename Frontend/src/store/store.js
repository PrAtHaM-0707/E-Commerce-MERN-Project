import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a user slice with initial state and reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "", // Initial email state
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload; // Update email in state
    },
  },
});

// Export the setEmail action
export const { setEmail } = userSlice.actions;

// Configure the store with the user reducer
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;