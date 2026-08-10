import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ResortDetail from "./pages/ResortDetail";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <HashRouter>
      <div className="demo-banner">
        Front-end demo built from the Arctic Travels UX case study — mock data, no real backend or payment.{" "}
        <a href="https://www.connectwithsayali.com/arctic-travels/index.html">View the case study →</a>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resort/:slug" element={<ResortDetail />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </HashRouter>
  );
}
