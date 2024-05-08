import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import { ContactForm } from "./components/ContactForm";


import About from "./pages/About";
import Essays from "./pages/Essays";
import Home from "./pages/Home";
import EssayDetailed from "./components/EssayDetailed";



const Template = () => {

  return (
    <div className="max-w-7xl mx-auto bg-white">
          <Router>
      <div className="max-w-7xl mx-auto bg-white">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/essay/:essay_id" element={<EssayDetailed />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default Template;
