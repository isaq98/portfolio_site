import './App.css';
import Overview from './Components/Overview';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

function App() {
  return (
   <main>
    <Navbar />
    <Overview />
    <About />
    <Experience />
    <Projects />
   </main>
  );
}

export default App;
