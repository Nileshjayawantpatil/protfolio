import Intro from "./Componets/Intro/intro";
import Navbar from "./Componets/NavBar/navbar";
import Skills from "./Componets/Skills/skills";
import Works from "./Componets/Works/works";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
 
      
    </div>
  );
}

export default App;
