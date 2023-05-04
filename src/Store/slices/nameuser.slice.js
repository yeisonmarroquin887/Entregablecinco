import { createSlice } from "@reduxjs/toolkit";

const nameuser =createSlice({
    name: "nameuser",
    initialState: "",
    reducers: {
        setname: (state, action) => action.payload
    }
})
export const { setname }= nameuser.actions

export default nameuser.reducer