import { Link, Route as Nav, Routes as Navigation } from "react-router-dom";
import './app.css'
import Xyz from "./xyz";
import { useParams,useNavigate } from "react-router-dom";
const Data =()=>{
    let {uid}=useParams();
    return<>
    {uid==='u1'?<h1>hello useperams</h1>:null}
    </>
}
const Navigate = ()=>{
    const ReturnToHome = useNavigate();
    const handleredirect = ()=>{
        ReturnToHome('/')
    }

    return<>
    <button onClick={handleredirect}>Back to home</button>
    </>
}

const App = () => {
    return <>
        <div className="App">
            <div className="Navbar">
                <h2>Logo</h2>
                <ul>
                    <Link to='/'><li>home</li></Link>
                    <Link to='/about/u1'><li>about</li></Link>
                    <Link to='/contact'><li>contact</li></Link>
                    <Link to='/setting'><li>setting</li></Link>
                </ul>
                </div>
                <Navigation>
                    <Nav path="/" element={<Xyz/>} />
                    <Nav path="/about/:uid" element={<Data/>} />
                    <Nav path="/contact" element={<Navigate/>} />
                    <Nav path="/setting" element={<h1>setting</h1>} />
                </Navigation>       
        </div>
    </>
}
export default App;