const reduxToolkit = require("@reduxjs/toolkit");

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = reduxToolkit.createSlice({
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

module.exports.cakeReducer = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
