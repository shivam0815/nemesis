import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HRTraining from "./pages/HRTraining";
import CustomerTraining from "./pages/CustomerTraining";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B4FA8] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/hr-training" element={<HRTraining />} />
        <Route path="/services/customer-training" element={<CustomerTraining />} />
      </Routes>
    </div>
  );
}
