import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import backgroundImg from './assets/topography.svg'

import About from "./pages/About";
import Essays from "./pages/Essays";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import EssayDetailed from "./components/EssayDetailed";





const Template = () => {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`
  };

  return (
    <div className="mx-auto" style={backgroundStyle}>
          <Router>
      <div className="min-h-screen mx-auto max-w-7xl  font-[pt-sherif]">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/essay/:essay_id" element={<EssayDetailed />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default Template;
