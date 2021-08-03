interface ProjectDivProps {
    name?: string;
    link?: string;
    image?: string;
    description?: string;
    github?: string;
    video?: string;
    technologies?: string[];
}

function ProjectDiv({name, link, image, description, github, video, technologies} : ProjectDivProps) : JSX.Element {
    return (
        <div className="project-div">
            <div className="project-image" style={{backgroundImage:`url(${image})`}}>
                <h1>{name}</h1>
            </div>
            <p>{description}</p>
            <ul>
            {technologies?.map((technology) => {
                return(<li>{technology}</li>)
            })}
            </ul>

            {video? <video width="320" height="240" controls>
            <source src={video} type="video/mp4"></source></video> : null}
            <br />
            <a href={github} target="_blank" rel="noreferrer">Github</a> <a href={link} target="_blank" rel="noreferrer">Project</a>
        </div>
    )
}

export default ProjectDiv