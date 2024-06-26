import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price, positiveReviews, negativeReviews, commentsCount } = props.item;

  // State to manage the visibility of the review info popover
  const [showReviewInfo, setShowReviewInfo] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setShowReviewInfo(true);
  };

  const handleMouseLeave = () => {
    setShowReviewInfo(false);
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        {/* Image container with hover events */}
        <div className="car__img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={imgUrl} alt="" className="w-100" />
          {/* Review info popover */}
          {showReviewInfo && (
            <div className="review-info-popover">
              <p>Positive Reviews: 23{positiveReviews}</p>
              <p>Negative Reviews: 20{negativeReviews}</p>
              <p>Comments: 11{commentsCount}</p>
            </div>
          )}
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
          ₹{price}.00 <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Buy</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
