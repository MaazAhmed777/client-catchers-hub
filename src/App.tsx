import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import BrooksMovingCaseStudy from './pages/BrooksMovingCaseStudy';
import Pricing from './pages/Pricing';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/brooks-moving" element={<BrooksMovingCaseStudy />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;