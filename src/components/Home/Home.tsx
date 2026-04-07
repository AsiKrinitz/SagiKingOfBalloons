import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { Footer } from '../Footer/Footer';
import './Home.css';

export function Home() {
  return (
    <div className="app-container">
      <header className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-headline">שגיא מלך הבלונים</h1>
          <p className="home-subtitle">עיצובים מיוחדים לכל אירוע</p>
        </div>
      </header>

      <main className="home-gallery-container">
        <div className="home-gallery">
          {categories.map((cat) => (
            <Link to={`/${cat.id}`} key={cat.id} className="home-gallery-card">
              <div className="home-image-wrapper">
                <img src={cat.coverImage} alt={cat.title} className="home-balloon-image" />
                <div className="home-card-overlay">
                  <h2 className="home-card-title">{cat.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
