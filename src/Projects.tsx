import ProjectDiv from "./ProjectDiv";
import {pina, create, elephant, portfolio, vegetables, beepo} from "./projects-db";

function Projects() : JSX.Element {
    return (
        <div className="project-container">
            <ProjectDiv description={pina.description} name={pina.name} link={pina.link} github={pina.github}/>
            <ProjectDiv description={vegetables.description} name={vegetables.name} link={vegetables.link} github={vegetables.github}/>
            <ProjectDiv description={beepo.description} name={beepo.name} link={beepo.link} github={beepo.github}/>
            <ProjectDiv description={elephant.description} name={elephant.name} link={elephant.link} github={elephant.github}/>
            <ProjectDiv description={create.description} name={create.name} link={create.link} github={create.github}/>
            <ProjectDiv description={portfolio.description} name={portfolio.name} link={portfolio.link} github={portfolio.github}/>
        </div>
    )
}

export default Projects
