import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './Pages/admin.js';

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/premkumar" element={<Admin />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </>
  );
}

export default App;
