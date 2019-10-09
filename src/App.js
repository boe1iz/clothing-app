import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';

const ProductPage = props => {
  const [productPage, setProductPage] = useState('');

  useEffect(() => {
    const tempH1 = props.location.pathname.split('/')[2].toUpperCase();
    setProductPage(tempH1);
  }, [props.location.pathname]);

  return (
    <div>
      <span onClick={() => props.history.push('/')}>Home</span>
      <h1>{productPage} PAGE</h1>;
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
