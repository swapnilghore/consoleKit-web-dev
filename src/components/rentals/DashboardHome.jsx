import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { FaGamepad, FaShoppingCart, FaCoffee, FaShoppingBag } from 'react-icons/fa';

const DashboardHome = () => {

  const cards = [
    {
      icon: <FaGamepad size={24} />,
      title: 'Book a Setup',
      subtitle: 'Gaming Setup',
      description: 'Reserve premium gaming stations',
      buttonText: 'Book Now',
    },
    {
      icon: <FaShoppingCart size={24} />,
      title: 'Buy Product',
      subtitle: 'Shop',
      description: 'Browse gaming accessories',
      buttonText: 'Shop Now',
    },
    {
      icon: <FaCoffee size={24} />,
      title: 'Visit Café',
      subtitle: 'Gaming Café',
      description: 'Book café gaming sessions',
      buttonText: 'Reserve',
    },
  ];

  const activities = [
  {
    icon: <FaGamepad size={20} />,
    title: 'Gaming Setup Booked',
    detail: 'Station #4 - 2 hours',
    time: '2 hours ago',
  },
  {
    icon: <FaShoppingBag size={20} />,
    title: 'Purchase Completed',
    detail: 'Gaming Mouse - Razer',
    time: 'Yesterday',
  },
  {
    icon: <FaCoffee size={20} />,
    title: 'Café Visit',
    detail: '3 Hour Session',
    time: '2 days ago',
  },
];
  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-start bg-white p-3 rounded shadow-sm">
        {/* Welcome Text */}
        <div>
          <h5 className="fw-bold mb-0">Welcome back, John!</h5>
          <small className="text-muted">Let’s get gaming!</small>
        </div>

        {/* Notification & Wallet */}
        <div className="d-flex align-items-center gap-3">
          {/* Notification Bell with badge */}
          <div className="position-relative me-3">
            <FaRegBell className="bi bi-bell-fill fs-5 text-secondary" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>

          {/* Wallet */}
          <div className="bg-light px-3 py-1 rounded-pill d-flex align-items-center">
            <i className="bi bi-wallet2 me-2 text-primary"></i>
            <span className="fw-semibold">$250.00</span>
          </div>
        </div>
      </div>

      <div className="container my-4">
      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="bg-light rounded-circle p-2 me-2">
                  {card.icon}
                </div>
                <small className="text-muted">{card.subtitle}</small>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text text-muted">{card.description}</p>
                <button className="btn btn-primary w-100">
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container bg-white rounded-4 my-4">
      <div className="rounded-4 p-4">
        <h5 className="fw-bold mb-4">Recent Activity</h5>
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`d-flex justify-content-between align-items-center py-3 ${index < activities.length - 1 ? 'border-bottom' : ''}`}
          >
            <div className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                {activity.icon}
              </div>
              <div>
                <div className="fw-semibold">{activity.title}</div>
                <div className="text-muted small">{activity.detail}</div>
              </div>
            </div>
            <div className="text-muted small">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DashboardHome;
