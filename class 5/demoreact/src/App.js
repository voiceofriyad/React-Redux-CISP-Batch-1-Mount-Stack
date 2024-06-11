import AboutMe from "./components/About/AboutMe";
import Experience from "./components/Experience/Experience";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <h1 className = "text-7xl text-red-500">Md Faysal Alam Riyad</h1> */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me */}

      <AboutMe />

      {/* Experience */}
      <Experience />

    </div>
  );
}

export default App;
