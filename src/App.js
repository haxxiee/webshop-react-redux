import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { fetchProducts, fetchUsers, fetchCarts } from "./redux/actions";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/Home";
import AccountPage from "./components/AccountPage/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./components/AdminPage/AdminPage";
import AdminProdPage from "./components/AdminPage/AdminProdPage/AdminProdPage";
import AdminCartPage from "./components/AdminPage/AdminCartPage/AdminCartPage";

function App({ fetchProducts, fetchUsers, auth, user, fetchCarts }) {
  useEffect(() => {
    fetchProducts();
    fetchUsers();
    fetchCarts();
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
          <Route element={<ProtectedRoute isLogged={user.role === "admin"} />}>
            <Route path="/admin" exact element={<AdminPage />} />
            <Route
              path="/admin/product/:id"
              exact
              element={<AdminProdPage />}
            />
            <Route path="/admin/carts" exact element={<AdminCartPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth, user: state.users.currentUser };
};

export default connect(mapStateToProps, {
  fetchProducts,
  fetchUsers,
  fetchCarts,
})(App);
