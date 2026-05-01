import { Link } from "react-router-dom";
import "./AsiFooter.css";

export function AsiFooter() {
  return (
    <div className="asi-footer">
      <div className="asi-footer-content">
        <div className="legal-links">
          <Link to="/accessibility" onClick={() => window.scrollTo(0, 0)}>הצהרת נגישות</Link>
          <span className="separator">|</span>
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>מדיניות פרטיות</Link>
        </div>
        <p>
          האתר נבנה ומתוחזק ע"י{" "}
          <a 
            href="https://asikdesign.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="asi-link"
          >
            אסי קריניץ - בניית אתרים
          </a>
        </p>
      </div>
    </div>
  );
}
