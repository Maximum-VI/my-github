import React from 'react';

function Footer() {
    return (
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-4">
              <h5>Our top cities</h5>
              <ul className="list-unstyled">
                <li>San Francisco</li>
                <li>Miami</li>
                <li>San Diego</li>
                <li>East Bay</li>
                <li>Long Beach</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>&nbsp;</h5>
              <ul className="list-unstyled">
                <li>Los Angeles</li>
                <li>Washington DC</li>
                <li>Seattle</li>
                <li>Portland</li>
                <li>Nashville</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>&nbsp;</h5>
              <ul className="list-unstyled">
                <li>New York City</li>
                <li>Orange County</li>
                <li>Atlanta</li>
                <li>Charlotte</li>
                <li>Denver</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 Food Delivery</p>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
