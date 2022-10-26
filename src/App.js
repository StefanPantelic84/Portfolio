import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
