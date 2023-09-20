import "./App.css";
import "./components/UI/stylesheet.css";
import { Container, Box } from "@mui/material";

import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer/Footer";
import About from "./screens/About";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
import Portfolio from "./screens/Portfolio";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box className="App">
      <Container maxWidth="disabled" disableGutters>
        <Header />
        <Routes>
          <Route path="*" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
