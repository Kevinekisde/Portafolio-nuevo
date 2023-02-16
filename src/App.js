import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import { Contact } from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
