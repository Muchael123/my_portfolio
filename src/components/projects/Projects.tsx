import { motion } from "framer-motion";
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
        "Neon",
        "Clerk",
        "NeonDb",
        "Daraja API",
      ],
      image: "/images/story-yetu.png",
      link: "https://story-yetu.vercel.app",
      github: "https://github.com/Muchael123/story-yetu",
    },
    {
      title: "tumeiget",
      description:
        "A web app that easens the process of getting owners lost ID",
      stack: ["React", "Tailwindcss", "Django"],
      image: "/images/tumeiget.png",
      link: "https://2meiget.vercel.app",
      github: "https://github.com/Muchael123/2meiget",
    },
    {
      title: "SwiftUsalama",
      description:
        "A mobile app that helps users to report crimes and emergencies",
      stack: ["React Native", "Firebase"],
      image: "/images/tumeiget.png",
      link: "https://github.com/Muchael123/SwiftUsalama",
      github: "https://github.com/Muchael123/SwiftUsalama",
    },
  ];

  return (
    <div
      className={`flex w-full mt-[4vh] flex-col py-5 px-4 md:py-3 min-h-[90vh]`}
    >
      <Hr />
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <Subtitles text="Some of My projects" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MyProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
