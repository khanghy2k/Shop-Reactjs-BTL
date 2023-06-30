import { Route,Routes,Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import SignUp from '../pages/Signup';
import ProtectedRoute from './ProtectedRoute';
import Checkout from '../pages/Checkout';
import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import DashBoard from '../admin/DashBoard';
import Users from '../admin/Users';
import OrderDashboard from '../admin/Orders';

const Routers = () => {
  return <Routes>
  <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>

    <Route path='/*' element={<ProtectedRoute/>}>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='dashboard' element={<DashBoard/>}/>
      <Route path='dashboard/all-products' element={<AllProducts/>}/>
      <Route path='dashboard/add-product' element={<AddProducts/>}/>
      <Route path='dashboard/users' element={<Users/>}/>
      <Route path='dashboard/orders' element={<OrderDashboard/>}/>
    </Route>
    <Route path='login' element={<Login/>}/>
    <Route path='Signup' element={<SignUp/>}/>
  </Routes>
  
};

export default Routers