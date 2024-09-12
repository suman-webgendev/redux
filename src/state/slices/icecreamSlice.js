import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../slices/cakeSlice";

const initialState = {
  noOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.noOfIceCream > 0) {
        state.noOfIceCream--;
      }
    },
    restocked: (state, action) => {
      state.noOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      if (state.noOfIceCream > 0) {
        state.noOfIceCream--;
      }
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
