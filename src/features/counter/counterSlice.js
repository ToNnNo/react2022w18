import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      value: 0, 
      step: 9
  },
  reducers: {
    increase: (state, action) => {
      //console.log(action);
      // state.value++
      // state.value += Number(action.payload.step)
      state.value += action.payload.step
    },
    decrease: (state, action) => {
      // state.value--
      state.value -= action.payload.step
    }
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;

export const countSelector = (state) => state.counter;