import React from 'react';

function HowItWorks() {
  return (
    <div className="bg-light py-5">
    <div className="container text-center">
      <h2>How does it work?</h2>
      <div className="row mt-4">
        <div className="col-md-3">
          <img src="https://png.pngtree.com/element_our/sm/20180515/sm_5afb0cf7bd445.jpg" width="150" height="150"alt="Select location" />
          <h5>Select location</h5>
          <p>Choose the location where your food will be delivered.</p>
        </div>
        <div className="col-md-3">
          <img src="https://e7.pngegg.com/pngimages/4/102/png-clipart-fork-and-spoon-gps-logo-take-out-online-food-ordering-delivery-restaurant-the-restaurant-door-food-logo.png" width="150" height="150"alt="Choose order" />
          <h5>Choose order</h5>
          <p>Check over hundreds of menus to pick your favorite food.</p>
        </div>
        <div className="col-md-3">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/693/037/small_2x/coin-stack-icon-money-dollar-symbol-business-pay-concept-isolated-on-white-free-vector.jpg" width="150" height="150"alt="Pay advanced" />
          <h5>Pay advanced</h5>
          <p>It's quick, safe, and simple. Select several methods of payment.</p>
        </div>
        <div className="col-md-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DJpBrqnYygbqATRJeA20kl-OvFUKypxUx9OBBtAI9JeWfE-RH4SfexYPhScebLk4zZw&usqp=CAU" width="150" height="150" alt="Enjoy meals" />
          <h5>Enjoy meals</h5>
          <p>Food is made and delivered directly to your home.</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default HowItWorks;
