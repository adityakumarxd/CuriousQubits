import React from "react";
import "./EventBookingInterface.css"; // Same styles for consistency
import "./Navigation.css";


const MyTickets = () => {
    const events = [
      {
        id: 1,
        title: 'Event 1',
        details: 'Experience an unforgettable night of music and entertainment.',
        buttonText: 'Book now',
        tag: 'Popular',
        date: 'Mar 15, 2025',
        location: 'City Center'
      },
      {
        id: 2,
        title: 'Event 2',
        details: 'Join us for this exclusive workshop with industry experts.',
        buttonText: 'Book place',
        tag: 'Limited',
        date: 'Apr 10, 2025',
        location: 'Tech Hub'
      },
      {
        id: 3,
        title: 'Event 3',
        details: "A unique cultural experience you won't want to miss.",
        buttonText: 'Book now',
        tag: 'New',
        date: 'May 5, 2025',
        location: 'Art Gallery'
      },
      {
        id: 4,
        title: 'Event 4',
        details: "A thrilling adventure awaits you in this outdoor experience.",
        buttonText: 'Reserve spot',
        tag: 'Adventure',
        date: 'Jun 20, 2025',
        location: 'Mountain Retreat'
      }
    ];
  
    return (
      <div className="event-container">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">My Tickets</h1>
  
        <div className="events-wrapper">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-details">{event.details}</p>
                <div className="event-info">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
              <button className="event-button">{event.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MyTickets;
