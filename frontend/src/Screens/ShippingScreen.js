import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../Actions/cartActions';

import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [address, setAddress] = useState('');

  const [city, setCity] = useState('');

  const [postalCode, setPostalCode] = useState('');

  const [country, setCountry] = useState('');

  const dispatch = useDispatch('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <form onSubmit={SubmitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type='text'
            placeholder='enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}></Form.Control>
        </Form.Group>
        <br />
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </form>
    </FormContainer>
  );
};

export default ShippingScreen;
