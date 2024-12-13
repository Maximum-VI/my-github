import React from 'react';

function FeaturedRestaurants() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Featured Restaurants</h2>
      <div className="container my-5">
  <div className="row g-4">
    {[...Array(8)].map((_, index) => (
      <div className="col-md-3" key={index}>
        <div className="card shadow-sm">
          <img
            src="https://www.aimadeitforyou.com/wp-content/uploads/2016/04/fullsizeoutput_5f66.jpeg"
            className="card-img-top"
            alt="Dish"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-warning text-dark">20% off</span>
              <span className="badge bg-light text-dark">Fast</span>
            </div>
            <h5 className="card-title">Restaurant {index + 1}</h5>
            <p className="card-text text-secondary mb-1">⭐ {40 - index} reviews</p>
            <span
              className={`badge ${
                index % 3 === 0 ? "bg-success" : "bg-secondary"
              }`}
            >
              {index % 3 === 0 ? "Open Now" : "Opens Tomorrow"}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default FeaturedRestaurants;
