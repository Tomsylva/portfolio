import {motion} from "framer-motion";

function About() : JSX.Element {
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        transition={{duration: 0.75}}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="about-div">
           <h1>About</h1>
           <br />
           <p>Full stack web developer based in Nürnberg, Germany.</p>
           <p><img src="./ironhack.png" alt="ironhack logo" className="ironhack"/> IronHack web development bootcamp graduate.</p>
           <br />
           <motion.div
           initial="hidden"
           animate="visible"
           transition={{duration: 1.25}}
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1 },
           }}>
           <p><strong>Frameworks & Libraries: </strong>Handlebars <i className="fab fa-react"/> React <i className="fab fa-angular"/> Angular <i className="fab fa-bootstrap"/> Bootstrap</p>
           <p><strong>Frontend: </strong>TypeScript <i className="fab fa-html5"/> HTML <i className="fab fa-css3-alt"/> CSS <i className="fab fa-sass"/> SASS <i className="fab fa-js"/> JavaScript</p>
           <p><strong>Backend: </strong>Axios <i className="fab fa-node-js"/> NodeJS <i className="fas fa-server"/> ExpressJS</p>
           <p><strong>Database: </strong>SQL <i className="fas fa-database"> </i> MongoDB</p>
           <p><strong>Version Control: </strong>Git <i className="fab fa-github"></i> GitHub</p>
           </motion.div>
           <br />
           <motion.div
           initial="hidden"
           animate="visible"
           transition={{duration: 3}}
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1 },
           }}>
             <p className="icons"><i className="fas fa-coffee"/><i className="fas fa-bicycle"/><i className="fas fa-mountain"/><i className="fas fa-guitar"/><i className="fas fa-code"/></p></motion.div>
        </motion.div>
    )
}

export default About
