import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const docRef = await collection(db, 'orders');
      await addDoc(docRef, {
        name,
        email,
        phoneNumber,
        streetAddress,
        city,
        postalCode,
        country,
        cartItems, // Thêm thông tin sản phẩm vào đơn hàng
        totalQty,
        totalAmount,
      });

      toast.success('Order placed successfully!');
      // Clear the cart after placing the order
      // Clear the form inputs
      setName('');
      setEmail('');
      setPhoneNumber('');
      setStreetAddress('');
      setCity('');
      setPostalCode('');
      setCountry('');

      navigate('/home');
    } catch (error) {
      toast.error('Error placing order ' + error.message);
    }
  };

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Phone number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Street address'
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Postal code'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> Free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className='buy__btn auth__btn w-100' onClick={handlePlaceOrder}>
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
