interface ProjectDivProps {
    name?: string;
    description?: string;
    link?: string;
    github?: string;
    // technologies?: [string];
}

function ProjectDiv({name, /*description,*/ link/*, github*/} : ProjectDivProps) : JSX.Element {
    return (
        <div className="project-div">
            <a href={link} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
        </div>
    )
}

export default ProjectDiv
