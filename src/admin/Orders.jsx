import React,{useEffect, useState } from 'react';
import { Container,Row,Col } from 'reactstrap';
import { collection,getDocs,deleteDoc,doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';


const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetchOrders();
    })
    const fetchOrders = async () => {
        try {
            const ordersRef = collection(db, 'orders');
            const snapshot = await getDocs(ordersRef);
            const ordersData = snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            });
            setOrders(ordersData);
          } catch (error) {
            console.log(error);
          }
        };
      const confirmOrder = async (orderId) => {
        try {
          // Find the index of the order with the specified orderId
          const orderIndex = orders.findIndex((order) => order.id === orderId);
      
          if (orderIndex !== -1) {
            // Implement your logic to confirm the order here
            // For example, you can update a field in the order document
            console.log('Order confirmed:', orderId);
            toast.success('Success Confirmation')
      
            // Delete the order from Firestore
            const orderRef = doc(db, 'orders', orderId);
            await deleteDoc(orderRef);
      
            // Fetch orders again after deleting
            fetchOrders();
          } else {
            console.log('Order not found:', orderId);
          }
        } catch (error) {
          console.log(error);
        }
      };
      
      
  return <section>
    <Container>
        <Row>
            <Col lg='12'>
            <table className='table'>
          <thead>
            <tr>
            <th>Image</th>
            <th>ProductName</th>
            <th>Name</th>
            <th>Email</th>
            <th>phoneNumber</th>
            <th>Street Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Total Qty</th>
            <th>Total Amount</th>
            </tr>
            </thead>
            <tbody>
               {
                orders.map((order)=>(
                <tr key={order.id} >
                <td>
             {order.cartItems && order.cartItems.length > 0 && order.cartItems[0].imgUrl ? (
    <img src={order.cartItems[0].imgUrl} alt='' />
  ) : (
    <span>No image</span>
  )}
</td>
 <td>
             {order.cartItems && order.cartItems.length > 0 && order.cartItems[0].productName 
             }
</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.streetAddress}</td>
                <td>{order.city}</td>   
                <td>{order.country}</td>
                <td>{order.totalQty}</td>
                <td>{order.totalAmount}</td>
                <td>
                <button
  className='btn btn-dark'
  onClick={() => confirmOrder(order.id)}
>
  Confirm Order
</button>

                    </td>
              </tr>
                ))
               }
            </tbody>
          </table>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Orders