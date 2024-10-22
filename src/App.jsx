import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
// import Three from "./components/ThreeJSModelsLWM/Three";
import CyberPunk from "./components/Cyberpunk/CyberPunk";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/" element={<Landing />} />
          {/* <Route path="/three" element={<Three />} /> */}
          <Route path="/cp" element={<CyberPunk  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
