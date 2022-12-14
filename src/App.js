import { useState, useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from 'react-router-dom';

import { ProductContext, ProductProvider } from "./contexts/ProductContext";

import logo from './logo.svg';
import './App.css';

import Header from "./components/common/header/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/footer/Footer";
import BackToTop from "./components/common/back-to-top/BackToTop";
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/product-detail/ProductDetail";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import Login from "./components/pages/login/Login";

import Register from "./components/pages/register/Register";
import { UserProvider } from "./contexts/UserContext";
import Orders from "./components/pages/orders/Orders";
import { CartProvider } from "./contexts/CartContext";
import { CheckoutProvider } from "./contexts/CheckoutContext";
import { OrderProvider } from "./contexts/OrderContext";
import OrderView from "./components/pages/order-view/OrderView";

function App() {
    let location = useLocation();
    
    useLayoutEffect(() => {
        const jqueryScript = document.createElement('jqueryScript');
        jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
        jqueryScript.defer = true;
        document.body.appendChild(jqueryScript);

        const bootstrapScript = document.createElement('bootstrapScript');
        bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js";
        bootstrapScript.defer = true;
        document.body.appendChild(bootstrapScript);

        const easingScript = document.createElement('easingScript');
        easingScript.src = "%PUBLIC_URL%/lib/easing/easing.min.js";
        easingScript.defer = true;
        document.body.appendChild(easingScript);

        const mainScript = document.createElement('mainScript');
        mainScript.src = "%PUBLIC_URL%/js/main.js";
        mainScript.defer = true;
        document.body.appendChild(mainScript);

        return () => {
            document.body.removeChild(jqueryScript);
            document.body.removeChild(bootstrapScript);
            document.body.removeChild(easingScript);
            document.body.removeChild(mainScript);
        }
    }, [location.pathname]);

  return (
    <>
        <Helmet>
            <script src="js/main.js" type="text/javascript" defer></script>
        </Helmet>
        
        <ProductProvider>
            <CartProvider>
                <UserProvider>
                    <CheckoutProvider>
                        <OrderProvider>

                            <Header />

                            <Routes>
                                    <Route index path="/" element={<Home />} />
                                    <Route path="/products" element={<Products />} />
                                    <Route path="/product/:productId" element={<ProductDetail />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/orders" element={<Orders />} />
                                    <Route path="/order/:orderId" element={<OrderView />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                </Routes>

                            <Footer />
                            <BackToTop />


                        </OrderProvider>
                    </CheckoutProvider>
                </UserProvider>
            </CartProvider>
        </ProductProvider>
    </>    
  );
}

export default App;
