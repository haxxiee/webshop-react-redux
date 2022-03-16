import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/product/:id" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
