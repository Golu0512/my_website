import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/index';

export default configureStore ({
    reducer: {
        string: searchReducer
    }
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());