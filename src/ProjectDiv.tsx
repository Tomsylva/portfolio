interface ProjectDivProps {
    name?: string;
    link?: string;
    image?: string;
    description?: string;
    github?: string;
    // video?: string;
    technologies?: string[];
    display?: string;
}

function ProjectDiv({name, link, image, description, github, technologies, display} : ProjectDivProps) : JSX.Element {
    return (
        <div className="project-div">
            <div className="project-image" style={{backgroundImage:`url(${image})`}}>
                <div className="overlay">
                    <h1>{name}</h1>
                    <a href={github} target="_blank" rel="noreferrer" className="project-link">Github</a> <a href={link} target="_blank" rel="noreferrer" className="project-link">Project</a>
                    </div>
            </div>
            <p>{description}</p>
            <ul>
            {technologies?.map((technology) => {
                return(<li>{technology}</li>)
            })}
            </ul>

            {display ? <img src={display} alt={name} className="project-display"/> : null}

            {/* {video? <video width="320" height="240" controls>
            <source src={video} type="video/mp4"></source></video> : null} */}
        </div>
    )
}

export default ProjectDiv