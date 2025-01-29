
import Hr from "../common/Hr";
import Subtitles from "../common/Subtitles";
import ProjectCard from "./ProjectCard"; 

function Projects() {

  const MyProjects = [
    {
      title: "Story-Yetu",
      description: "An AI-powered kids story builder app",
      stack: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Clerk",
        "NeonDb",
        "Daraja API",
      ],
      image: "/images/story-yetu.png",
      link: "https://story-yetu.vercel.app",
      github: "https://github.com/Muchael123/story-yetu",
      type: "web",
    },
     {
    "title": "Mwalimu-Smart",
    "description": "A smart platform for teachers to manage lessons, assignments, and student performance",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "JWT Authentication"
    ],
    "image": "/images/sc.jpeg",
    "github": "https://github.com/Muchael123/mwalimu-smart",
    "type": "web"
  },
    {
      title: "tumeiget",
      description:
        "A web app that easens the process of getting owners lost ID",
      stack: ["React", "TailwindCSS", "Django"],
      image: "/images/tumeiget.png",
      link: "https://2meiget.vercel.app",
      github: "https://github.com/Muchael123/2meiget",
      type: "web",
    },
    {
      title: "SwiftUsalama",
      description:
        "A mobile app that helps users to report crimes and emergencies",
      stack: ["React Native", "Firebase"],
      image: "/images/swiftusalama.png",
      github: "https://github.com/Muchael123/SwiftUsalama",
      type: "mobile",
    },
    {
      title: "Fololimo",
      image: "https://camo.githubusercontent.com/a44421897719969f4c875a24aec744583bb3db181b573217f6731622e1ecd091/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c696f3763706a6f2f696d6167652f75706c6f61642f76313732393636363236342f666f6c6f6c696d6f2f53637265656e73686f745f32303234313031392d3138353834395f4578706f5f476f5f6777346367392e6a7067",
      description: "A mobile app for farmers that guides them through farming",
      stack: [
        "React Native",
        "Django",
        "firebase",
        "nodejs",
        "Tailwindcss",
        "IoT",
      ],
      github: "https://github.com/Mmust-Ihub/follolimo-frontend.git",
      type: "mobile",
    },
  ];

  return (
    <div className={`flex flex-col w-full py-5 px-4 h-fit`} id="projects">
      <Hr />
      <Subtitles text="Some of My Projects" />

      <p className="text-center mb-10 w-full mt-3 italic">Most Recent Works</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {MyProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
