import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number;
};

const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state: InitialState) => {
      state.numOfCakes--;
    },
    restocked: (state: InitialState, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const cakeReducer = cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
