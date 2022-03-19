import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer
          autoClose={1600}
          toastStyle={{ backgroundColor: "#303030", color: "white" }}
        />
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/product/:id" exact element={<ProductPage />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
