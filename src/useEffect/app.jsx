import { useState } from "react"
import DemoUseEffect from "./demouseEffect";
import "./app.css";

const App = () => {
    const [isplaying, setisplaying] = useState(false);
    return <>
        <div className="caintainer">
            <button onClick={() => {
                setisplaying(!isplaying);
            }}>{isplaying ? 'pause' : 'play'}</button>
            <DemoUseEffect src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isplaying={isplaying} />
        </div>
    </>

}

export default App;