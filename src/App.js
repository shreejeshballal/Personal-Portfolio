
import './App.css';
import About from './components/Container/About/About';
import Contact from './components/Container/Contact/Contact';
import Footer from './components/Container/Footer/Footer';
import Home from './components/Container/Home/Home';
import Portfolio from './components/Container/Portfolio/Portfolio';
import Skills from './components/Container/Skills/Skills';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
