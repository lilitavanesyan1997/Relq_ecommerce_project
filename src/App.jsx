import React from 'react';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from './pages/Cart';
import {BrowserRouter, Routes,  Route } from 'react-router-dom';


const App = () => {
  return(
  <div>
        {/* <Home /> */}
        <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/product"  element={<  Product />} />
        <Route path="/register"  element={<Register/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/productlist"  element={<ProductList/>} />
          </Routes>
     </BrowserRouter>

        {/* <ProductList/>
        <Product/>
        <Register/>
        <Login/>
        <Cart/> */}
    </div>
  );
};

export default App;
