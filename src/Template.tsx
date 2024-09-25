import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import backgroundImg from "./assets/topography.svg";

import Work from "./pages/Work";
import Essays from "./pages/Essays";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import EssayDetailed from "./components/EssayDetailed";
import SideNav from "./components/Header";

const Template = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <div style={backgroundStyle}>
      <Router>
        {/* <div className="min-h-screen  font-[pt-sherif]"> */}
        <div className="h-screen flex flex-row justify-start items-stretch  font-[pt-sherif]">
          {/* <Navbar /> */}
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
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
