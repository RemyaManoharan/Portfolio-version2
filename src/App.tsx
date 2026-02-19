import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import EducationSection from './components/sections/Education';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-dark-primary">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EducationSection/>
    </div>
  );
}

export default App;
