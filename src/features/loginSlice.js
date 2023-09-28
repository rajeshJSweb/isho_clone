import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

// Initialize Firebase authentication
const auth = getAuth(app);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  message: "",
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        return { message: "Please verify your email address" };
      }
      return user;
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        return { error: "Enter a valid email address and password" };
      } else if (error.code === "auth/user-not-found") {
        return { error: "User not found. Please check registered email" };
      } else if (error.code === "auth/missing-password") {
        return { error: "Enter password." };
      } else if (error.code === "auth/wrong-password") {
        return { error: "Incorrect password. Please try again." };
      } else {
        return { error: error.message };
      }
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.error
          : "An error occurred.";
      });
  },
});

export default loginSlice.reducer;
