import logo from './logo.svg';
import './App.css';
import Overview from './Components/Overview';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
   <main>
    <Navbar />
    <Overview />
    <About />
   </main>
  );
}

export default App;
