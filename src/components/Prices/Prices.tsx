import './Prices.css';

export function Prices() {
  const pricesList = [
    { id: 'weddings', title: 'חתונות', price: '500' },
    { id: 'rooms', title: 'חדרים', price: '300' },
    { id: 'business', title: 'עסקים', price: '600' },
    { id: 'events', title: 'אירועים', price: '400' },
  ];

  return (
    <div className="prices-container">
      <h2 className="prices-title">מחירון</h2>
      <div className="prices-list">
        {pricesList.map((item) => (
          <div key={item.id} className="price-item">
            <span className="price-name">{item.title}</span>
            <span className="price-value">₪{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
