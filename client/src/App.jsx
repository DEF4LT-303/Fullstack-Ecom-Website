import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path='/products/:category' element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      {/* <Routes>
        <Route path='/cart' element={<Cart />} />
      </Routes> */}
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
