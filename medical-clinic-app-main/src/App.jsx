import Navbar from "./components/header/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/contact/Contact";
import About from "./components/aboutComps/About";
import Notfoundpage from "./components/NotFound/Notfoundpage";

import Aboutt from "./pages/About/Aboutt";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<Notfoundpage />} />
        
        <Route path="/aboutt" element={<Aboutt />} />
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//<Route path="/about" element={<About />} />