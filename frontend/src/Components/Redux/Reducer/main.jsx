// import {combineReducers} from 'redux';
// import{cartreducer} from "./reducer";

// const rootred=combineReducers({
// cartreducer
// });
// export default rootred

import {combineReducers} from "redux";
import { cartreducer } from "./reducer";


const rootred = combineReducers({
    cartreducer
});


export default rootred