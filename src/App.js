import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./component/Hero";
import Product from "./component/Products";
import { GlobalStyle } from "./globalStyle";
import { productData, productDataTwo } from "./component/Products/data";
import Feature from "./component/Feature";
import Sweet from "./component/SweetProduct";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading="Choose Your Favorite" data={productData} />
      <Feature />
      <Sweet heading="Choose Your Favorite Sweet" data={productDataTwo} />
    </Router>
  );
}

export default App;
