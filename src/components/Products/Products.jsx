import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../../redux/actions";
import Product from "./Product/Product";
import styles from "./Products.module.scss";

const Products = ({ products, cart, filterProducts }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [products, cart]);

  useEffect(() => {
    filterProducts("");
  }, []);

  return (
    <div className={styles.products__container}>
      <h1>Products</h1>
      <div class="box">
        <select onChange={(e) => filterProducts(e.target.value)}>
          <option value={""}>All</option>
          <option value={"women's clothing"}>Women's Clothing</option>
          <option value={"men's clothing"}>Men's Clothing</option>
          <option value={"jewelery"}>Jewelery</option>
          <option value={"electronics"}>Electronics</option>
        </select>
      </div>
      <div className={styles.product__grid}>
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.productsShowing, cart: state.shop.cart };
};

export default connect(mapStateToProps, { filterProducts })(Products);
