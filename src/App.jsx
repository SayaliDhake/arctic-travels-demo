import { HashRouter, Routes, Route } from "react-router-dom";
import LandingV2 from "./pages/LandingV2";
import ResortDetailV2 from "./pages/ResortDetailV2";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <HashRouter>
      <div className="demo-banner">
        Front-end demo built from the Arctic Travels UX case study — mock data, no real backend or payment.{" "}
        <a href="https://www.connectwithsayali.com/arctic-travels/index.html">View the case study →</a>
      </div>
      <Routes>
        <Route path="/" element={<LandingV2 />} />
        <Route path="/resort-v2" element={<ResortDetailV2 />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </HashRouter>
  );
}
