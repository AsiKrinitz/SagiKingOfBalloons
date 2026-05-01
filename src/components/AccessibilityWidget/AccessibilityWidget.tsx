import { useState, useEffect } from 'react';
import './AccessibilityWidget.css';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  useEffect(() => {
    // Apply body classes
    document.documentElement.classList.toggle('a11y-large-text', largeText);
    document.body.classList.toggle('a11y-high-contrast', highContrast);
    document.body.classList.toggle('a11y-highlight-links', highlightLinks);
  }, [largeText, highContrast, highlightLinks]);

  return (
    <div className="a11y-widget">
      {isOpen && (
        <div className="a11y-menu glass-panel">
          <div className="a11y-header">
            <h3>תפריט נגישות</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="סגור תפריט נגישות">×</button>
          </div>
          <button onClick={() => setLargeText(!largeText)} className={`a11y-option ${largeText ? 'active' : ''}`}>
            {largeText ? 'הקטנת טקסט' : 'הגדלת טקסט'}
          </button>
          <button onClick={() => setHighContrast(!highContrast)} className={`a11y-option ${highContrast ? 'active' : ''}`}>
            ניגודיות גבוהה
          </button>
          <button onClick={() => setHighlightLinks(!highlightLinks)} className={`a11y-option ${highlightLinks ? 'active' : ''}`}>
            הדגשת קישורים
          </button>
          <button className="a11y-option reset-btn" onClick={() => {
            setLargeText(false);
            setHighContrast(false);
            setHighlightLinks(false);
          }}>
            איפוס הגדרות
          </button>
        </div>
      )}
      <button 
        className="a11y-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 7h-5v12h-2v-6h-2v6H9V9H4V7h16v2z"/>
        </svg>
      </button>
    </div>
  );
}
