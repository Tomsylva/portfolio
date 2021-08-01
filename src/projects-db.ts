// interface SingleProject {
//     name: string;
//     description: string;
//     image: string;
//     technologies: [string];
//     github: string;
//     link: string;
//     video: string;
// }

const projects : object = {
    pina : {
        name: "Pina Collider",
        description: "An endless runner game with custom made graphics and sounds.",
        technolgies: ["P5", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/Tomsylva/pina-collider",
        link: "https://tomsylva.github.io/pina-collider/",
    },
    create : {
        name: "Create Hub",
        description: "A dynamic discussion board for creative people.",
        technolgies: ["NodeJS", "ExpressJS", "JavaScript", "HTML", "CSS", "Cloudinary", "MongoDB"],
        github: "https://github.com/Tomsylva/create-hub",
        link: "https://create-hub.herokuapp.com/",
    },
    beepo: {
        name: "Beepo",
        description: "An online synthesizer designed to be used with a Playtronica MIDI device.",
        technolgies: ["ReactJS", "ExpressJS", "JavaScript", "HTML", "CSS", "FramerMotion", "Howler"],
        github: "https://github.com/Tomsylva/beepo",
        link: "https://beepo.netlify.app/",
    },
    vegetables: {
        name: "Finish Your Damn Vegetables",
        description: "A dynamic and responsive fullstack application designed to connect hungry people to restaurants with food that would otherwise go to waste.",
        technolgies: ["ReactJS", "NodeJS", "ExpressJS", "LeafletJS", "MongoDB", "Axios", "JavaScript", "HTML", "CSS", "FramerMotion", "Cloudinary"],
        github: "https://github.com/Tomsylva/finish-your-vegetables",
        link: "https://finish-your-vegetables.netlify.app/",
    },
    elephant: {
        name: "The Black Elephant Band",
        description: "A band website with a client and public side.",
        technolgies: ["ExpressJS", "NodeJS", "MongoDB", "JavaScript", "HTML", "CSS", "TinyAPI", "Cloudinary"],
        github: "https://github.com/Tomsylva/black-elephant-band",
        link: "http://theblackelephantband.com/",
    },
    portfolio: {
        name: "My Portfolio",
        description: "The web development portfolio you are looking at.",
        technolgies: ["TypeScript", "ReactJS", "NodeJS", "HTML", "CSS", "FramerMotion"],
        github: "https://github.com/Tomsylva/portfolio",
        link: "https://tom-sylva.netlify.app/",
    }
}

export default projects;