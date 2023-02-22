const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
  numOfIcecreams: 12,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state) => {
      state.numOfIcecreams -= 2;
    },
  },
});

export const icecreamReducer = icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions