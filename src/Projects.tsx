import ProjectDiv from "./ProjectDiv";
// import {pina} from "./projects-db";

const pina =  {
    name: "Pina Collider",
    description: "An endless runner game with custom made graphics and sounds.",
    technolgies: ["P5", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Tomsylva/pina-collider",
    link: "https://tomsylva.github.io/pina-collider/",
}

function Projects() : JSX.Element {
    return (
        <>
            <ProjectDiv description={pina.description} name={pina.name} link={pina.link} github={pina.github}/>
        </>
    )
}

export default Projects
