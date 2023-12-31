import { useEffect, useRef } from "react"
const DemoUseEffect = ({ src, isplaying }) => {
    const myref = useRef(null);
    useEffect(() => {
        if (isplaying) {
            console.log("play")
            myref.current.play();
        } else {
            console.log("pause")
            myref.current.pause();
        }
        console.log("hello")
    }, [isplaying]);
    return <video ref={myref} src={src} loop></video>
}

export default DemoUseEffect;