import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { updateProduct } from "../../../redux/actions";
import styles from "./AdminProdPage.module.scss";

const AdminProdPage = ({ products, updateProduct }) => {
  const param = useParams();
  const product = products.find((item) => item.id === parseInt(param.id));
  const [prod, setProd] = useState({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
  });

  return (
    <div className={styles.prodpage}>
      <h2>Edit product</h2>

      <section className={styles.prodpage__info}>
        <div className={styles.item}>
          <h3>TITLE</h3>

          <textarea
            type="text"
            id="text"
            value={prod.title}
            required
            onChange={(e) =>
              setProd({
                ...prod,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className={styles.item}>
          <h3>PRICE</h3>

          <input
            type="number"
            id="number"
            value={prod.price}
            required
            onChange={(e) =>
              setProd({
                ...prod,
                price: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div className={styles.item}>
          <h3>DESCRIPTION</h3>

          <textarea
            type="text"
            id="text"
            value={prod.description}
            required
            onChange={(e) =>
              setProd({
                ...prod,
                description: e.target.value,
              })
            }
          />
        </div>

        <div className={styles.item}>
          <h3>CATEGORY</h3>

          <input
            type="text"
            id="text"
            value={prod.category}
            required
            onChange={(e) =>
              setProd({
                ...prod,
                category: e.target.value,
              })
            }
          />
        </div>
      </section>
      <div className={styles.btn__wrapper}>
        <button onClick={() => updateProduct(prod)}>Save Changes</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};

export default connect(mapStateToProps, { updateProduct })(AdminProdPage);
