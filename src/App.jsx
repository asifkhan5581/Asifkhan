import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
