import React from 'react';

function Hero() {
  return (
    <div className="container-fluid bg-warning text-white text-center py-5">
    <header className="d-flex justify-content-between align-items-center px-5">
      <div className="d-flex align-items-center">
        <img
          src="https://i.pinimg.com/originals/b7/ba/eb/b7baeb4e7b04336b0bdaec7f5e7495e8.png" width="40" height="40"
          alt="Logo"
          className="me-2"
        />
        <h3 className="m-0">food<span className="text-danger">wagon</span></h3>
      </div>
      <nav>
        <button className="btn btn-light me-2">Search Food</button>
        <button className="btn btn-warning text-white border">Login</button>
      </nav>
    </header>

    <main className="mt-5">
      <h1 className="display-4 fw-bold">Are you starving?</h1>
      <p className="lead">Within a few clicks, find meals that are accessible near you</p>

      <div className="d-flex justify-content-center mt-4">
        <div className="btn-group">
          <button className="btn btn-danger">Delivery</button>
          <button className="btn btn-light">Pickup</button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter Your Address"
        />
        <button className="btn btn-danger">Find Food</button>
      </div>
    </main>

    <div className="mt-5 d-flex justify-content-end">
      <img
        src="https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-fried-egg-with-stir-fried-minced-pork-and-basil-isolated-png-image_11469608.png"
        alt="Dish"
        className="rounded shadow-lg"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  </div>
  );
}

export default Hero;
