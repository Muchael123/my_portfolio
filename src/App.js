import Heading from './components/PromoHeading';
import Hero from './components/Hero'
function App() {
  return (

  <div className="overflow-x-hidden bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Heading />
    {/* hero */}
    <section id="hero" className="snap-center">
    <Hero />
    </section>
    {/* about */}
    {/* experience */}
    {/* skills */}
  </div>

  );
}

export default App;
