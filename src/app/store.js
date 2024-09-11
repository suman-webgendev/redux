import { configureStore } from "@reduxjs/toolkit";

import cakeSlice from "./features/cake/cakeSlice";
import iceCreamSlice from "./features/icecream/icecreamSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
    user: userSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(createLogger),
});

export default store;
