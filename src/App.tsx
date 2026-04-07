import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { CategoryPage } from './components/CategoryPage/CategoryPage';
import './index.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
