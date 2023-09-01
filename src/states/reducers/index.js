import { createSlice } from "@reduxjs/toolkit";

export const setSearchTextSlice = createSlice({
    name: 'setSearchText',
    initialState: {serachText:''},
    reducers: {
        setSearchText(state, action) {
            state.setSearchText = action.payload;
        }
    }
});

export const {setSearchText} = setSearchTextSlice.actions;
export default setSearchTextSlice.reducer;