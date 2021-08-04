import {AnimatePresence, motion} from "framer-motion"

function Landing() : JSX.Element {
    return (
        <motion.div
      initial="hidden"
      animate="visible"
      transition={{duration: 0.75}}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    id="home-page">
            <h1 id="home-h1">Tom Sylva</h1>
            <h3 id="home-h3">Web Developer</h3>
            <AnimatePresence>
            <motion.img exit={{x:-300}} src="./tom.png" id="home-image" alt="pixelated Tom"/>
            </AnimatePresence>
            <br />
        </motion.div>
    )
}

export default Landing
