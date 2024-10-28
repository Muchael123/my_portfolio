import { useState } from "react";
import { Theme, ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`flex min-h-screen flex-col items-center ${
          theme === Theme.Dark
            ? "bg-dark-background text-dark-text"
            : "bg-light-background text-gray-800"
        }`}
      >
        <Header />
        <div className="px-4  max-w-[858px]">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
