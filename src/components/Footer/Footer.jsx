import React from 'react'
import './Footer.css';
import logo from '../../assets/images/eco-logo.png'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();
  return <footer className='footer' >
    <Container>
      <Row>
        <Col lg='4'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <div>
            <h1>Multimart</h1>
          </div>
        </div>
        <p className='footer__text mt-4'>Thank you for visiting our website. We strive to provide the best experience for our users.
              If you have any questions or feedback, please don't hesitate to contact us.</p>
        </Col>

        <Col lg='3'>
        <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Top Categories</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to="#">Mobiles Phone</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="#">Modern Sofa</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="#">Arm Chair</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="#">Smart Watches</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
        </Col>

        <Col lg='2'>
        <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Useful Links</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to="/shop">Shop</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="/cart">Cart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="/login">Login</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="#">Privacy Policy</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
        </Col>

        <Col lg='3'>
        <div className='footer__quick-links'>
          <h4 className='quick__links-title'>Contact</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <span><i class="ri-map-pin-range-line"></i></span>
              <p>77 Trần Thái Tông , Huế</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <span><i class="ri-phone-line"></i></span>
              <p>0385021975</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <span><i class="ri-mail-line"></i></span>
              <p>khanghy2k@gmail.com</p>
            </ListGroupItem>
          </ListGroup>
        </div>
        </Col>
        <Col lg='12'>
          <p className='footer__copyright'>Copyright {year}</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer