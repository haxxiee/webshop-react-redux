import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { fetchProducts, fetchUsers } from "./redux/actions";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/Home";
import AccountPage from "./components/AccountPage/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App({ fetchProducts, fetchUsers, auth }) {
  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);
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
          <Route element={<ProtectedRoute isLogged={auth.token !== null} />}>
            <Route path="/account" exact element={<AccountPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { fetchProducts, fetchUsers })(App);
