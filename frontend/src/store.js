import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Components/Redux/Reducer/main';  // Adjust path as needed

const store = configureStore({
    reducer: rootReducer
});

export default store;
 