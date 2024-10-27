import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Muchael123",
  },
  {
    icon: <FaXTwitter />,
    url: "https://twitter.com/Maich_mgaza",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/michael-maina-087227235",
  },
];

function MySocials() {
  return (
    <div className="flex text-[32px] justify-center gap-5 md:justify-start mt-5">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          className="hover:scale-[125%] hover:text-green-500 transition-all duration-200"
          href={social.url}
          target="_blank"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{
            duration: 0.5+1,
            delay: index * 0.2,
            ease: "easeIn", 
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}

export default MySocials;
