import React from "react";
import { Theme, useTheme } from "../../context/ThemeContext";
import { MdWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import HeaderLinks from "./HeaderLinks";
import MenuBar from "./MenuBar";
import { motion, useScroll } from "framer-motion";


const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
    const { scrollYProgress } = useScroll();

  const toggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return (
    <div className="w-screen fixed top-5 flex z-[999] justify-center ">
      <header
        className={`transition-all max-w-[858px] relative bg-green-500/10 rounded-[12px]  backdrop-blur-md gap-7 flex flex-row justify-between items-center duration-250 ease-in-out p-4`}
      >
        <motion.div
          className="top-0 left-0 right-0 h-[5px]  bg-green-500 transform origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <a href="/">
          <h1 className="text-2xl text-green-500 font-semibold">
            {"<"}Michael <span className="text-yellow-500">Maina</span> {" />"}
          </h1>
        </a>
        <HeaderLinks theme={theme} />
        <MenuBar />
        <button
          onClick={toggleTheme}
          className={`transition-all duration-250 ease-in-out mt-2 p-2 rounded `}
        >
          {theme === Theme.Light ? <IoMoonSharp /> : <MdWbSunny />}
        </button>
      </header>
    </div>
  );
};

export default Header;
