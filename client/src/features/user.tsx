import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUsername, setPassword, setEmail } = userSlice.actions;
export default userSlice.reducer;
