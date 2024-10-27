import { useState } from "react";
import { motion } from "framer-motion";
import Hr from "../common/Hr";
import Subtitles from "../common/Subtitles";
import ProjectCard from "./ProjectCard";

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
    description: "A web app that easens the process of getting owners lost ID",
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
    image: "/images/swiftusalama.png",
    link: "https://github.com/Muchael123/SwiftUsalama",
    github: "https://github.com/Muchael123/SwiftUsalama",
  },
];

function Projects() {
  const [cards, setCards] = useState(MyProjects);

  const handleSwipe = (index: number) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards.splice(index, 1); // Remove the swiped card
      return [...newCards, prevCards[index]]; // Add it to the end
    });
  };

  return (
    <div className="flex flex-col w-full py-5 px-4 min-h-[90vh]">
      <Hr />
      <Subtitles text="Some of My Projects" />
      <div className="relative mt-5 flex justify-center">
        <div className="absolute inset-0 flex justify-center items-center">
          {cards.map((project, index) => (
            <motion.div
              key={index}
              onDragEnd={(event, info) => {
                const offset = info.offset.x;

                // Swipe left or right
                if (Math.abs(offset) > 100) {
                  handleSwipe(index);
                }
              }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }} // Adjust these values as needed
              className={`${
                index === cards.length - 1 ? "z-20" : "z-10 opacity-80"
              } absolute transition-all duration-300`}
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translateY(${index * 10}px)`, // Adjust the overlap
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
