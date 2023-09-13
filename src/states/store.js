import { configureStore } from '@reduxjs/toolkit';
import {setSearchTextSlice, pageNumberStoreSlice} from './reducers/index';

export default configureStore ({
    reducer: {
        searchText: setSearchTextSlice.reducer,
        pNumber: pageNumberStoreSlice.reducer,
    },
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());