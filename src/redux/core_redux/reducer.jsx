const initialState = {
    booking:[]
}

const Reservationdata = (state=initialState,action)=>{
    if(action.type==="NEW_BOOKING"){
        return{
            ...state,
            booking:[...state.booking,action.paylode]
        }
    }
}