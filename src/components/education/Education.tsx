
import Hr from "../common/Hr";
import Subtitles from "../common/Subtitles";
import Certification from "./Certification";
import SchoolCard from "./SchoolCard";
import { LiaCertificateSolid } from "react-icons/lia";
import { FcGraduationCap } from "react-icons/fc";
import MySkills from "./MySkills";

function Education() {
    const MyCertification = [
        {
            title: "Software Engineering",
            institution: "ALX",
            date: "2021 - 2022",
        },
        {
            title: "Software Development",
            institution: "Power Learn Project",
            date: "Oct 2024 - Present",
        }
    ]
  return (
    <div
      className="flex w-full z-0 mt-[4vh] flex-col py-5 px-4 md:py-3 relative"
      id="qualifications"
    >
      <Hr />
      <Subtitles text="Qualifications" />
      <div className="flex flex-col md:flex-row gap-3 justify-center mt-3">
        <div className="w-fit flex flex-col h-fit md:h-[400px] justify-start">
          <h3 className="text-xl text-green-500 mb-3 font-semibold inline-flex gap-3 w-full justify-center mt-5 items-center">
            <span className="">
              <FcGraduationCap />
            </span>{" "}
            Education
          </h3>
          <SchoolCard />
        </div>
        <div className="md:h-[330px] h-1 md:w-5 w-full border-l-2 border-green-500"></div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl text-green-500 mb-3 font-semibold inline-flex gap-3 w-full justify-center mt-5 items-center">
            <span className="">
              <LiaCertificateSolid />
            </span>{" "}
            Certifications
          </h3>
          {MyCertification.map((cert, index) => (
            <Certification key={index} {...cert} i={index} />
          ))}
        </div>
          </div>
          <MySkills />
    </div>
  );
}

export default Education