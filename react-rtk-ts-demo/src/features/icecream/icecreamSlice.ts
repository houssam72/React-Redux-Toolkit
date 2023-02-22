import {createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
  numOfIcecreams: number;
};

const initialState: InitialState = {
  numOfIcecreams: 12,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state: InitialState) => {
      state.numOfIcecreams--;
    },
    restocked: (state: InitialState, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state: InitialState) => {
      state.numOfIcecreams -= 2;
    },
  },
});

export const icecreamReducer = icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
