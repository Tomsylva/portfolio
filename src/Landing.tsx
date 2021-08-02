import {motion} from "framer-motion"

function Landing() : JSX.Element {
    return (
        <div id="home-page">
            <h1 id="home-h1">Tom Sylva</h1>
            <h3 id="home-h3">Web Developer</h3>
            <motion.img src="./tom.png" id="home-image" alt="pixelated Tom"/>
            <br />
        </div>
    )
}

export default Landing
