const reduxToolkit = require("@reduxjs/toolkit");

const initialState = {
  numOfIcecreams: 10,
};

const icecreamSlice = reduxToolkit.createSlice({
  name: "icecream",
  initialState,
  reducers:{
    ordered:(state)=>{
        state.numOfIcecreams--
    },
    restocked:(state,action)=>{
        state.numOfIcecreams+=action.payload
    }
  },
  extraReducers:{
    ['cake/ordered']:(state)=>{
        state.numOfIcecreams-=2
    }
  }
});

module.exports.icecreamReducer=icecreamSlice.reducer
module.exports.icecreamActions=icecreamSlice.actions