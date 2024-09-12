import { configureStore } from "@reduxjs/toolkit";

import cakeSlice from "../slices/cakeSlice";
import iceCreamSlice from "../slices/icecreamSlice";
import { userApi } from "../slices/userApiSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
