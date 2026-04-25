import './Contact.css';
import facebookIcon from '../../images/Facebook_logo.png';
import instagramIcon from '../../images/Instagram_logo.png';
import tiktokIcon from '../../images/TikTokLogo.png';

export function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">צור קשר</h2>
      <p className="contact-subtitle">מוזמנים ליצור איתי קשר בכל עת!</p>
      
      <div className="contact-details">
        {/* Placeholder for future data */}
        <p>פרטים נוספים יעודכנו בקרוב...</p>
      </div>

      <div className="social-links">
        <a href="#" className="social-icon-link" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="#" className="social-icon-link" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="#" className="social-icon-link" aria-label="TikTok">
          <img src={tiktokIcon} alt="TikTok" className="social-icon" />
        </a>
      </div>
    </div>
  );
}
