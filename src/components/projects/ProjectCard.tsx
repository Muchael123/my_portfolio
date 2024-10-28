import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { SiClerk } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Theme, ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
  github?: string;
  type?: "web" | "mobile" | string;
};

const stackIcons: { [key: string]: JSX.Element } = {
  React: <FaReact />,
  "Next.js": <RiNextjsFill />,
  Firebase: <IoLogoFirebase />,
  TailwindCSS: <RiTailwindCssFill />,
  PostgreSQL: <BiLogoPostgresql />,
  Django: <DiDjango />,
  Clerk: <SiClerk />,
  "React Native": <TbBrandReactNative />,
};

function ProjectCard({
  title,
  description,
  stack,
  image,
  link,
  github,
}: ProjectCardProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`flex flex-col rounded-lg shadow-lg p-4 ${
        theme === Theme.Dark ? "bg-gray-900" : "bg-white"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3
        className={`font-semibold text-lg mt-2 ${
          theme === Theme.Dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-1 ${
          theme === Theme.Dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-2">
        <h4
          className={`font-semibold ${
            theme === Theme.Dark ? "text-white" : "text-gray-900"
          }`}
        >
          Tech Stack:
        </h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {stack.map((tech) => (
            <div
              key={tech}
              className="flex items-center bg-green-500 text-white px-2 py-1 rounded-full"
            >
              <span className="mr-1">{stackIcons[tech]}</span>
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
