import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
  github: string;
};

function ProjectCard({
  title,
  description,
  stack,
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-lg shadow-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="font-semibold text-lg mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
      <p className="text-sm text-gray-500 mt-1">
        Tech Stack: {stack.join(", ")}
      </p>
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
