import React from 'react';
import { FaGift, FaGraduationCap, FaMugHot } from 'react-icons/fa';

const DiscountOffers = () => {
  return (
    <div className="container my-5">
      <div className="row gy-4 justify-content-center">
        <div className="col-md-4">
          <div className="offer-card d-flex justify-content-between align-items-center p-4 rounded-4 shadow-sm bg-white h-100">
            <div>
              <h5 className="fw-bold mb-1">Weekend Special</h5>
              <p className="text-muted mb-0">20% off on all gaming setups</p>
            </div>
            <FaGift className="text-primary fs-2" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="offer-card d-flex justify-content-between align-items-center p-4 rounded-4 shadow-sm bg-white h-100">
            <div>
              <h5 className="fw-bold mb-1">Student Discount</h5>
              <p className="text-muted mb-0">15% off with valid ID</p>
            </div>
            <FaGraduationCap className="text-primary fs-2" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="offer-card d-flex justify-content-between align-items-center p-4 rounded-4 shadow-sm bg-white h-100">
            <div>
              <h5 className="fw-bold mb-1">Café Happy Hours</h5>
              <p className="text-muted mb-0">2 hours + 1 free drink</p>
            </div>
            <FaMugHot className="text-primary fs-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountOffers;
