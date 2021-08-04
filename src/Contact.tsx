import {motion} from "framer-motion";

function Contact() : JSX.Element {
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        transition={{duration: 0.75}}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="contact-div">
            <h1>Contact</h1>
            <p><a href="https://www.linkedin.com/in/thomas-sylva/" target="_blank" rel="noreferrer" className="contact-link"><i className="fab fa-linkedin"/></a> <a href="https://github.com/Tomsylva" target="_blank" rel="noreferrer" className="contact-link"><i className="fab fa-github-square"/></a></p>
            <p><i className="far fa-envelope"></i> tomsylvanz@gmail.com</p>
        </motion.div>
    )
}

export default Contact
