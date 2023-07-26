import { useEffect, useState } from "react";
import './promice.css'
let imglist = [];
const PromiseData = () => {
    const [arry, setarry] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((res) => setarry(res))
            .catch(alert)

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((res) => imglist = res.map(x => x.url))
            .catch(alert)
    }, [])


    const list = arry.map((x, index) => <><div key={x.id} className="cantainer">
        <img src={imglist[index]} alt="imges" />
        <h5>{x.body}</h5>
    </div>
        <div className="blankdiv"></div></>

    )

    return <>{list}</>
}
export default PromiseData;