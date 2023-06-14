import React from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  // const user = true;

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
