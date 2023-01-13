import logo from './logo.svg';
import './App.css';
import Overview from './Components/Overview';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';

function App() {
  return (
   <main>
    <Navbar />
    <Overview />
    <About />
    <Experience />
   </main>
  );
}

export default App;
