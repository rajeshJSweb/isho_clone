import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const initialState = {
  user: null,
  isLoading: false,
  isError: null,
  success:false,
  message:''
};

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser)
    alert('Please check your email for verification link')
  } catch (error) {
    if(error.code ==="auth/email-already-in-use"){
      return {error: 'Email already used by another account!'}
    }
    else if(error.code === "auth/invalid-email"){
        return {error:'Enter a valid email address and password!'}
    }
    else if(error.code === "auth/missing-password"){
        return {error:'Please enter password!'}
    }
    else if(error.code === "auth/weak-password"){
        return {error:'Password should be at least 6 characters!'}
    }
    return { success: false, error: error.message };
  }
});

const createUserSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.user = auth.currentUser;
        } else {
          state.isError = action.payload.error;
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default createUserSlice.reducer;
