import Marquee from "react-fast-marquee";
import { FaHtml5, FaJs, FaReact, FaGithub, FaGit } from "react-icons/fa";
import { IoLogoCss3, IoLogoNodejs, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

function MySkills() {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <IoLogoCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <IoLogoNodejs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Firebase", icon: <IoLogoFirebase /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Git", icon: <FaGit /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
  ];

  return (
    <div className="w-full">
      <p className="text-center mb-3 italic font-semibold">
        Skills I have gained over the years
      </p>
      <Marquee gradient={!isMobileOrTablet} speed={60}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 mx-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <div className="md:text-4xl text-2xl text-green-500 mb-1 md:mb-2">
              {skill.icon}
            </div>
            <p className="text-center font-medium">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MySkills;
