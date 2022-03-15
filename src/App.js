import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/product/:id" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="*" elemen={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
