interface ProjectDivProps {
    name?: string;
    link?: string;
    image?: string;
    description?: string;
    github?: string;
    // video?: string;
    technologies?: string[];
    display?: string;
    demo?: string;
}

function ProjectDiv({name, link, image, description, github, technologies, display, demo} : ProjectDivProps) : JSX.Element {
    return (
        <div className="project-div">
            <div className="project-image" style={{backgroundImage:`url(${image})`}}>
                <div className="overlay">
                    <h1>{name}</h1>
                    <a href={github} target="_blank" rel="noreferrer" className="project-link">Github</a> <a href={link} target="_blank" rel="noreferrer" className="project-link">Project</a> {demo? <a href={demo} target="_blank" rel="noreferrer" className="project-link">Live demo</a> : null}
                    </div>
            </div>
            <p>{description}</p>
            <ul>
            {technologies?.map((technology) => {
                return(<li>{technology}</li>)
            })}
            </ul>

            {display ? <img src={display} alt={name} className="project-display"/> : null}
        </div>
    )
}

export default ProjectDiv