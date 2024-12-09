import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import CyberPunk from "./components/Cyberpunk/CyberPunk";
import NotFound from "./components/Notfound/NotFound";
import Matterjs from "./components/Matterjs/Matterjs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/cp" element={<CyberPunk />} />
          <Route path="/matter" element={<Matterjs />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
