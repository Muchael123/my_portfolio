import Hr from "../common/Hr";
import Subtitles from "../common/Subtitles";
import WorkCard from "./WorkCard";

function Experience() {
  
   

  const myWorks = [
    {
      tittle: "Software Developer (Frontend/Mobile)",
      company: "Mmust-Ihub",
      date: "23rd December 2023–Present",
      location: "Kakamega, Kenya",
      description: [
        "Developed mobile applications for iOS and Android platforms using React Native to reach a broader audience.",
        "Utilized version control systems for source code management and collaborative tracking of changes.",
        "Automated software builds, testing, and deployment with Expo to ensure efficient release cycles.",
        "Collaborated with back-end developers and stakeholders for seamless integration of components.",
        "Implemented user interface designs and animations to enhance user experience and engagement.",
      ],
    },
    {
      tittle: "Project Developer Lead",
      company: "Mmust-Ihub",
      date: "Jul 2024 - Present",
      location: "Kakamega, Kenya",
      description: [
        "Identified and resolved issues to enhance performance and user satisfaction.",
        "Conducted code reviews and provided constructive feedback to uphold code quality and best practices.",
      ],
    },
    {
      tittle: "Frontend Developer Intern",
      company: "Washikadau Pikchaz Entertainment",
      location: "Nairobi, Kenya",
      date: "Jul 2024 - Present",
      description: [
        "Assisted in the development of user interfaces and ensured responsiveness across various devices.",
        "Reviewed and prepared contracts detailing pricing, terms, and special provisions.",
        "Maintained organized and accessible data through consistent database management.",
        "Collaborated with team members to implement design changes and optimize user experience.",
      ],
    },
    {
      tittle: "Frontend Developer (Volunteer)",
      company: "Baraka Women",
      location: "Nairobi, Kenya",
      date: "Jul 2024 - August 2024",
      description: [
        "Contributed to frontend development projects, enhancing user interfaces and improving overall user experience.",
        "Collaborated with designers to implement responsive design and ensure compatibility across different devices.",
        "Wrote clean, maintainable code using React, focusing on component-based architecture to promote reusability and scalability.",
        "Assisted in debugging and troubleshooting to improve application performance and reliability.",
      ],
    },
  ];
  return (
    <div
      className={`flex  w-full mt-[4vh] flex-col   py-5 px-4 md:py-3 min-h-[90vh]`}
      id="experience"
    >
      <Hr />
      <Subtitles text="Experience" />
      <div className="flex flex-col md:flex-wrap justify-between">
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 mt-3 py-3">
          {myWorks.map((work, index) => (
            <WorkCard key={index} {...work} />
            ))}
        </div>
        
      </div>
    </div>
  );
}

export default Experience