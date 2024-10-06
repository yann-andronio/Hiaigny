import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  age: number;
  email: string;
}

const initialState: UserState = {
  name: '',
  age: 0,
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUserAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setUserName, setUserAge, setUserEmail } = userSlice.actions;

export default userSlice.reducer;
