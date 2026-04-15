import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Brands from "./Pages/Brands";
import Contact from "./Pages/Contact";

import './App.css';

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true, // ek baar hi animation chale
  //   });
  // }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;