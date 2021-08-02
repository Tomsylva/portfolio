import ProjectDiv from "./ProjectDiv";
import {pina, create, elephant, portfolio, vegetables, beepo} from "./projects-db";

function Projects() : JSX.Element {
    return (
        <div className="project-container">
            <ProjectDiv name={pina.name} link={pina.link} image={pina.image}/>
            <ProjectDiv name={vegetables.name} link={vegetables.link} image={vegetables.image}/>
            <ProjectDiv name={beepo.name} link={beepo.link} image={beepo.image}/>
            <ProjectDiv name={elephant.name} link={elephant.link} image={elephant.image}/>
            <ProjectDiv name={create.name} link={create.link} image={create.image}/>
            <ProjectDiv name={portfolio.name} link={portfolio.link} image={portfolio.image}/>
        </div>
    )
}

export default Projects
