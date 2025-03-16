import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import LoginSignUp from "./Components/Assets/LoginSignUp/LoginSignUp";
import EventBookingInterface from "./Components/Assets/EventBooking/EventBookingInterface";
import Mylist from "./Components/Assets/EventBooking/Mylist";
import MyTickets from "./Components/Assets/EventBooking/MyTickets";

// Import CSS files - order matters for cascade
import "./Components/Assets/EventBooking/Navigation.css";
import "./Components/Assets/LoginSignUp/LoginSignUp.css";
import "./Components/Assets/EventBooking/EventBookingInterface.css";

// Rest of your code remains the same
  // 🎯 Common layout for authenticated pages
  const Layout = ({ children }) => (
    <div>
      {/* 🌟 Slider Navigation */}
      <nav className="slider-nav">
        <ul>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events</NavLink></li>
          <li><NavLink to="/mylist" className={({ isActive }) => isActive ? "active" : ""}>My List</NavLink></li>
          <li><NavLink to="/mytickets" className={({ isActive }) => isActive ? "active" : ""}>My Tickets</NavLink></li>
        </ul>
      </nav>
      
      {/* 👇 Render the page content here */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );

  function App() {
    return (
      <Router>
        <Routes>
          {/* 🏠 Login Page */}
          <Route path="/" element={<LoginSignUp />} />

          {/* 📌 Wrap authenticated routes inside `Layout` */}
          <Route path="/events" element={<Layout><EventBookingInterface /></Layout>} />
          <Route path="/mylist" element={<Layout><Mylist /></Layout>} />
          <Route path="/mytickets" element={<Layout><MyTickets /></Layout>} />
        </Routes>
      </Router>
    );
  }

  export default App;

