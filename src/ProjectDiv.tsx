interface ProjectDivProps {
    name?: string;
    link?: string;
    image?: string;
}

function ProjectDiv({name, link, image} : ProjectDivProps) : JSX.Element {
    return (
        <div className="project-div" style={{backgroundImage: `url(${image})`}}>
            <a href={link} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
        </div>
    )
}

export default ProjectDiv
