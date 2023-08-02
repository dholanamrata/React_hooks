
const initialState = {
    booking : []
}

const Reservationdata = (state = initialState,action)=>{
    if(action.type === "NEW_BOOKING"){
        return {
            ...state,
            booking:[...state.booking,action.payload]
        }
    }
    return state; 

}

export const cancelBookingData = (state = initialState,action)=>{
    if(action.type === "CANCEL"){
        return {
            ...state,
            booking:[state.booking.filter(x=>x.name != action.payload.name)]
        }
    }
    return state;

}

export const Accounting = (totalammount = 100,action)=>{
if(action.type === "NEW_BOOKING"){
    return totalammount + action.payload. amount;
}else if(action.type === "CANCEL"){
    return totalammount - action.payload.amount;
}

return totalammount;
}

export default Reservationdata