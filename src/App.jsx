import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import CyberPunk from "./components/Cyberpunk/CyberPunk";
import NotFound from "./components/Notfound/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/cp" element={<CyberPunk />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
