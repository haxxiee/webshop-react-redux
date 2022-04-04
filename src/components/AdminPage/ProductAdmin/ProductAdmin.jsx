import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductAdmin.module.scss";
import { connect } from "react-redux";
import { removeProduct } from "../../../redux/actions";

const ProductAdmin = ({ prod, removeProduct }) => {
  return (
    <>
      <div className="prod__admin">
        <Link to={`/admin/product/${prod.id}`}>
          <div className={styles.prod__admin__container}>
            <div>{prod.id}</div>
            <div>{prod.title}</div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeProduct(prod.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default connect(null, { removeProduct })(ProductAdmin);
