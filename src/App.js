
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {Route,Routes} from 'react-router-dom'
import Products from './components/products/Products';
import ProductDetail from './components/products/ProductDetail';
import { useState } from 'react';
import AppContext from './context/AppContext';
import Cart from './components/cart/Cart';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';

function App() {
  const selectedProduct=[];

  function addtocart(prd){
   selectedProduct.push(prd);
   
  }
  const contextValues={selectedProduct,addtocart};

  return (
    <>
    <AppContext.Provider value={contextValues}>
    <Navbar/>
    <Banner/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Products/:ProductId" element={<ProductDetail/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </AppContext.Provider>
    </>
  );
}

export default App;
