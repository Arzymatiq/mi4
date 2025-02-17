import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./slices/EmployeeSlice";
export const store = configureStore({
    reducer: {
        employee: EmployeeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
