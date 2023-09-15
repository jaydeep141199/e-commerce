import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import RegistrationPage from './components/Registration';

import LoginPage from './components/Login';
import Main from './components/Main';
import  Cart  from './components/Cart';
import { Order } from './components/Order';
import Notfound from './components/Notfound';


const Routing = () => {
  return (
    <BrowserRouter> 
    <Routes>
      <Route index  element={<RegistrationPage/>}/>
      <Route  path="/login" element={<LoginPage/>} />
      <Route  path="/registrationpage" element={<RegistrationPage/>} />
      <Route  path="/loginpage" element={<LoginPage/>} />
      <Route  path="/header" element={<Main/>} />
      <Route  path="/cart" element={<Cart/>} />
      <Route path='order' element={<Order/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default Routing