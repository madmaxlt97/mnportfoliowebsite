import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import ContactsPage from "./pages/ContactsPage";
import PortfolioPage from "./pages/PortfolioPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="*" element={<IntroPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}
