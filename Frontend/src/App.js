import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import  HomePage from './Components/Screens/HomePage'
import  Login from './Components/Screens/Login'
import  Register from './Components/Screens/Register'
import  CartPage from './Components/Screens/CartPage'
import  NotFoundPage from './Components/Screens/NotFoundPage'
import  OderPage from './Components/Screens/OderPage'

import  PaymentPage from './Components/Screens/PaymentPage'
import  PlaceOrderPage from './Components/Screens/PlaceOrderPage'
import  ProfilePage from './Components/Screens/ProfilePage'
import  ShippingPage from './Components/Screens/ShippingPage'
import  SingleProduct from './Components/Screens/SingleProduct'



function App() {
  return (
    <div className="App my-5"> This Line is to check the routering
      <nav className='navList'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Login">Login</Link></li>
      <li><Link to="/Register">Register</Link></li>
      {/* <li><Link to="/">NotFoundPage</Link></li> */}
      <li><Link to="/CartPage">CartPage</Link></li>
      <li><Link to="/OderPage">OderPage</Link></li>
      <li><Link to="/PaymentPage">PaymentPage</Link></li>
      <li><Link to="/PlaceOrderPage">PlaceOrderPage</Link></li>
      <li><Link to="/ProfilePage">ProfilePage</Link></li>
      <li><Link to="/ShippingPage">ShippingPage</Link></li>
      <li><Link to="/SingleProduct">SingleProduct</Link></li>
      </nav>
      
      {/* <Link to="/ProfilePage">ProfilePage</Link> */}
      {/* <Router> */}
        <Routes>

          <Route exact path='/' element={<HomePage/>}/>


          {/* <Route exact path='/' element={<HomePage/>}/> */}
          <Route path='/CartPage/:id?' element={<CartPage/>}/>
          <Route path='/SingleProduct/:id?' element={<SingleProduct/>}/>


          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/OderPage' element={<OderPage/>}/>

          <Route path='/PaymentPage' element={<PaymentPage/>}/>
          <Route path='/PlaceOrderPage' element={<PlaceOrderPage/>}/>
          <Route path='/ProfilePage' element={<ProfilePage/>}/>
          <Route path='/ShippingPage' element={<ShippingPage/>}/>

          <Route path='*' element={<NotFoundPage/>}/>

        </Routes>
        {/* </Router> */}
    </div>
  );
}

export default App;
