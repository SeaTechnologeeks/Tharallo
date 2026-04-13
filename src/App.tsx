import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Management from "./Pages/Management";
import Technology from "./Pages/Technology";
import Engineering from "./Pages/Engineering";
import ContactPage from "./Pages/ContactPage";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import CookiePolicy from "./Pages/CookiePolicy";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
