import './Services.css';

export function Services() {
  const services = [
    { id: 'weddings', title: 'חתונות' },
    { id: 'rooms', title: 'חדרים' },
    { id: 'business', title: 'עסקים' },
    { id: 'events', title: 'אירועים' },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">השירותים שלי</h2>
      <div className="services-grid">
        {services.map((srv) => (
          <div key={srv.id} className="service-card">
            <h3 className="service-card-title">{srv.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
