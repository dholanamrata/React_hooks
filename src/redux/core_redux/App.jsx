
import { useDispatch, useSelector } from "react-redux";
import { newBooking, cancleBooking } from "./action";
import { useState } from "react";

function App() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.newbooking.booking);
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [newid, setNewId] = useState(1)

    const handleInputChange = (e) => {
        setName(e.target.value)
    }
    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleNewBooking = (e) => {
        dispatch(newBooking(name, Number(amount)));
        setNewId(newid + 1);
        setName("");
        setAmount("");
    }
    return (
        <>
            <input placeholder="Enter your name..." value={name} onChange={handleInputChange} />
            <input placeholder="Amount" value={amount} onChange={handleAmountChange} />
            <button
                onClick={handleNewBooking
                    //     () => {
                    //     dispatch(newBooking("mukesh", 120));
                    // }
                }
            >newbooking
            </button>
            <ul>
                {
                    data.map((x, i) => <li key={i}>
                        {x.name}{x.amount}
                        <button onClick={()=>{
                            dispatch(cancleBooking())
                        }}>Cancle</button>
                    </li>)
                }
        </ul >
        </>
    );
}

export default App;