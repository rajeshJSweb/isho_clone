import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
});

const logOutSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  extraReducers: (builder) => {
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export default logOutSlice.reducer;
