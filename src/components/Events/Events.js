import React from 'react';
import { eventsData } from '../../data/events';
import './Events.css';

const Events = () => {
  const upcomingEvents = eventsData.upcoming;

  return (
    <section className="events-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">📅 সাংস্কৃতিক আয়োজন</div>
          <h1 className="section-title">আসন্ন ইভেন্টসমূহ</h1>
          <p className="section-subtitle">উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতের বিশেষ বিশেষ অনুষ্ঠান ও আসর</p>
        </div>

        <div className="events-grid">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="date-day">০১</span>
                <span className="date-month">মার্চ</span>
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-venue">
                  <span className="venue-icon">📍</span>
                  <span>{event.venue}</span>
                </div>
                <button className="register-event-btn">
                  রেজিস্টার করুন <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;