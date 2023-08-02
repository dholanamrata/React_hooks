export const newBooking = (name,amount)=>{
    return{
        type:"NEW_BOOKING",
        payload:{
            name,
            amount
        }
    }
}
export const cancleBooking = (name,amount)=>{
    return{
        type:"CANCEL",
        payload:{
            name,
            amount
        }
    }
}