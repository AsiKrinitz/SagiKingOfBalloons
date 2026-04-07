import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import { Footer } from '../Footer/Footer';
import './CategoryPage.css';

export function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = categories.find(c => c.id === id);

  if (!category) {
    return (
      <div className="app-container" style={{ textAlign: 'center', padding: '10rem' }}>
        <h2>Gallery Not Found</h2>
        <button className="category-back-button" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="category-hero">
        <button className="category-back-button" onClick={() => navigate(-1)}>← Back to Folders</button>
        <div className="category-hero-content" style={{ textAlign: 'center' }}>
          <h1 className="category-headline">
            {category.title}
          </h1>
          <p className="category-subtitle">{category.images.length} beautiful designs</p>
        </div>
      </header>

      <main className="category-gallery-container">
        <div className="category-gallery">
          {category.images.map((src, idx) => (
             <div key={idx} className="category-gallery-card">
              <div className="category-image-wrapper">
                <img src={src} alt={`${category.title} ${idx + 1}`} className="category-balloon-image" />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
