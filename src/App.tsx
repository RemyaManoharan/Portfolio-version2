import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-dark-primary">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
