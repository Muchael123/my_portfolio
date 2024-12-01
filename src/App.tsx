import { useState } from "react";
import { Theme, ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import CanvasCursor from "./components/cursor/CanvasCursor";

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`flex min-h-screen items-center w-full overflow-x-clip flex-col ${
          theme === Theme.Dark
            ? "bg-dark-background text-dark-text"
            : "bg-light-background text-gray-800"
        }`}
      >
        <Header />
        <div className="px-4  max-w-[858px] w-full oveflow-x-clip">
          <Hero />
          <About />
          <CanvasCursor />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
      <div className="w-full relative pb-20">
      <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
