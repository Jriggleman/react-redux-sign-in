import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
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
  },
});

export const { setUsername, setPassword } = userSlice.actions;
export default userSlice.reducer;
