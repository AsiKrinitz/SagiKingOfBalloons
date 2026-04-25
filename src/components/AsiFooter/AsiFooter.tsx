import "./AsiFooter.css";

export function AsiFooter() {
  return (
    <div className="asi-footer">
      <div className="asi-footer-content">
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
