// src/components/Events/Events.js
import React from 'react';
import { eventsData } from '../../data/events';
import './Events.css';

const Events = () => {
  const upcomingEvents = eventsData.upcoming;

  return (
    <section className="events-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">আসন্ন ইভেন্ট</h1>
          <p className="section-subtitle">ভাওয়াইয়া সংগীতের বিশেষ আয়োজনসমূহ</p>
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
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.venue}</span>
                </div>
                <button className="register-event-btn">
                  রেজিস্টার করুন <i className="fas fa-user-plus"></i>
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