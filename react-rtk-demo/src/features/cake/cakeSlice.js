const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const cakeReducer = cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions