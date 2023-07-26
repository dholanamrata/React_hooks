import { useRef, useState } from "react"

const Stopwatch = () => {
    const [startTime, setstartTime] = useState(null);
    const [now, setnow] = useState(null);
    const stopvalue = useRef(null);

    const handlestart = () => {
        setstartTime(Date.now()) //restart click pr ni current value setstartTime() ne apshe
        clearInterval(stopvalue.current);

        //setInterval pridefine api che je dar 10 seconde value stopvalue.current ne apshe like duretion
        stopvalue.current = setInterval(() => {
            setnow(Date.now());
        }, 10)
    }

    const handlestop = () => {
        clearInterval(stopvalue.current)//duration clear thay jashe
    }
    return <>
        <h1>Time stamp:{startTime !== null && now !== null ? ((now - startTime) / 1000).toFixed(3) : ""}</h1>
        <button onClick={handlestart}>restart</button>
        <button onClick={handlestop}>stop</button>
    </>
}
export default Stopwatch