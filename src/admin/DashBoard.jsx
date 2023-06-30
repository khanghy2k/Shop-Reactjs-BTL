

import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import '../styles/dashboard.css'
import useGetData from '../custom-hooks/useGetData'

const DashBoard = () => {

  const {data:products} = useGetData('products')
  const {data:users} = useGetData('users')
  const {data:orders} = useGetData('orders')
  
  const totalSales = orders.reduce((total, order) => total + order.totalAmount, 0);


  return <>
    <section>
    <Container>
      <Row>
        <Col className='lg-3'>
          <div className='revenue__box'>
            <h5>Total Sales</h5>
            <span>${totalSales}</span>
          </div>
        </Col>
        <Col className='lg-3'>
        <div className='Order__box'>
            <h5>Orders</h5>
            <span>{orders.length}</span>
          </div>
        </Col>
        <Col className='lg-3'>
        <div className='products__box'>
            <h5>Total Products</h5>
            <span>{products.length}</span>
          </div>
        </Col>
        <Col className='lg-3'>
        <div className='users__box'>
            <h5>Total Users</h5>
            <span>{users.length}</span>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default DashBoard