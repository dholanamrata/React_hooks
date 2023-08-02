import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import Reservationdata from "./reducer";
import { cancelBookingData } from './reducer'
import { Accounting } from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    newbooking: Reservationdata,
    canclebooking: cancelBookingData,
    accounting: Accounting,

});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;