import Navbar from "./port/Navbar";
import Hovermove from './Portfolio/Hovermove.js'
import Parallox from './Portfolio/Parallox'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Skill from "./port/Skill";
import Projects from "./port/Projects";
import Headroom from "react-headroom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import About from "./port/About";
import Contact from "./port/Contact";
import Exp from "./port/Exp";
import { Element } from "react-scroll";




function App() {

  useEffect(()=>{
    Aos.init();
    
    },[])
    

  return (
    
    <>
     <Element id='move' >  </Element>
<Headroom>

<Navbar />
</Headroom>

<Hovermove/>

<Parallox/>

<Skill/>

<About/>
<Projects/>
<Exp/>




<Contact/>


  </>
  );
}

export default App;
