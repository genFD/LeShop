import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <Link to='/login'>
            {/* <Nav.Link>Sign In</Nav.Link> */}
            <p>Sign in</p>
          </Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link to='/shipping'>
            {/* <Nav.Link>Shipping</Nav.Link> */}
            <p>Shipping</p>
          </Link>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link to='/payment'>
            {/* <Nav.Link>Payment</Nav.Link> */}
            <p>Payment</p>
          </Link>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link to='/placeorder'>
            {/* <Nav.Link>Place order</Nav.Link> */}
            <p>Place order</p>
          </Link>
        ) : (
          <Nav.Link disabled>Place order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
