import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Services } from './components/Services/Services';
import { Prices } from './components/Prices/Prices';
import { About } from './components/About/About';
import { CategoryPage } from './components/CategoryPage/CategoryPage';
import { AsiFooter } from './components/AsiFooter/AsiFooter';
import { Contact } from './components/Contact/Contact';
import './index.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<CategoryPage />} />
      </Routes>
      <AsiFooter />
    </Router>
  );
}

export default App;
