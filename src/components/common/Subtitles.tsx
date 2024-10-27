import React, { useContext } from "react";// Adjust the path as necessary
import { ThemeContext } from "../../context/ThemeContext";

interface SubtitlesProps {
  text: string; // Define a prop type for the text
}

const Subtitles: React.FC<SubtitlesProps> = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`text-${
        theme === "Light" ? "gray-600" : "gray-300"
      } text-xl font-semibold text-center md:text-2xl lg:text-5xl mt-10 md:mt-5`}
    >
      {text}
    </div>
  );
};

export default Subtitles;
