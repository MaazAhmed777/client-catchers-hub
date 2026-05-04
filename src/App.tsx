import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import FreeAudit from './pages/FreeAudit';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/free-audit" element={<FreeAudit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
