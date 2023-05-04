import { configureStore } from "@reduxjs/toolkit";
import nameuser from "./slices/nameuser.slice.js"
export default configureStore({
    reducer: {
       nameuser
    }
})