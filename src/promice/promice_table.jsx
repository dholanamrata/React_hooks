import { useEffect, useState } from "react";
import './promice_table.css'

const PromiseData = () => {
    const [arry, setarry] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((res) => setarry(res))
            .catch(alert)
    }, [])

    const list = arry.map(data =><tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
    </tr>)

    return (<table>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <tbody >
            {list}
        </tbody>
    </table>)
}
export default PromiseData;