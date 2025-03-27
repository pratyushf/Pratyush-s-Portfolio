import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Workex from './components/Workex';
import './App.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Workex></Workex>
      <SocialLinks></SocialLinks>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
