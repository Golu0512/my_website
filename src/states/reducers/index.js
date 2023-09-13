import { createSlice } from "@reduxjs/toolkit";

const setSearchTextSlice = createSlice({
    name: 'setSearchText',
    initialState: {serachText:''},
    reducers: {
        setSearchText(state, action) {
            state.setSearchText = action.payload;
        }
    }
});

const pageNumberStoreSlice = createSlice({
    name: 'pageNumber',
    initialState:{pNumber: 1},
    reducers: {
        pageNumber(state, action) {
            state.pNumber = action.payload;
        }
    }
});

export {setSearchTextSlice};
export {pageNumberStoreSlice}
export const {pageNumber} = pageNumberStoreSlice.actions
export const {setSearchText} = setSearchTextSlice.actions
// export const {pageNumber} = pageNumberStoreSlice.actions;
// export default setSearchTextSlice.reducer;