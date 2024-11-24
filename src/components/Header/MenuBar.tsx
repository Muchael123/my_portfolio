import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MdMenu } from "react-icons/md";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const links = [
      { name: "home", link: "#Home" },
      { name: "about", link: "#about" },
      { name: "Experience", link: "#experience" },
      { name: "projects", link: "#projects" },
      { name: "Qualifications", link: "#qualifications" },
      { name: "contact", link: "#contact" },
    ];
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative p-4  flex lg:hidden"
    >
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
      >
        {isOpen ? (
          <motion.h2 variants={itemVariants} className="font-bold text-[24px]">
            X
          </motion.h2>
        ) : (
          <MdMenu size={24} />
        )}
      </motion.div>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 2,
              duration: 0.3,
            },
          },
        }}
        className={`absolute top-16 min-w-fit left-0 right-0 bg-gray-800 rounded-lg shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {links.map(({ name, link }) => (
          <motion.li
            key={link}
            variants={itemVariants}
            className="py-2 hover:text-green-500 hover:underline transition-all duration-200 px-4 text-white text-center"
          >
            <a onClick={() => setIsOpen(!isOpen)} href={link}>
              {name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
