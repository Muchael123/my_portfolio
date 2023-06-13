import Heading from './components/PromoHeading';
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/experience'
function App() {
  return (

  <div className="overflow-x-hidden bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Heading />
    {/* hero */}
    <div id="hero" className="snap-start">
    <Hero />
    </div>
    {/* about */}
    <section id="about" className="snap-center">
      <About />
    </section>
    {/* experience */}
    <section id="experience" className="snap-center">
      <Experience/>
    </section>
    {/* contact me */}
    <section id='contact' className="snap-center">
      <Contact/>
    </section>
  </div>

  );
}

export default App;
