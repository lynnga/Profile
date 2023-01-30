import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const topics = ["Projects", "About", "Resume", "Contact"]

  return (
    <div>
      <Header />
      <Navigation setCurrentPage={setCurrentPage} topics={topics}/>

      {currentPage === "Projects" && <Projects />}
      {currentPage === "About" && <About />}
      {currentPage === "Resume" && <Resume />}
      {currentPage === "Contact" && <Contact />} 
      <Footer />
    </div>
  );
}

export default App;
