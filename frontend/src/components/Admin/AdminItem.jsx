/* =======================================================
Importing necessary tools
=======================================================*/

import { useState } from 'react';
import styles from './Admin.module.css';
import axios from 'axios';

import { Routes, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';

/* =======================================================
Helper functions
=======================================================*/


/* =======================================================
Component
=======================================================*/

function AdminItem(props) {
  const [stock, setStock] = useState(props.stock);
  const [price, setPrice] = useState(props.price);
  const [stockPending, setStockPending] = useState(false);
  const [pricePending, setPricePending] = useState(false);

  // API REQUESTS
  function updateOneField(field, state) {
    const data = {};
    (data._id = props.product_id), (data[field] = state);
    axios.put(`/api/products/${field}`, data).catch((e) => alert(e));
  }

  // 🎯 add Authorization token header
  function deleteItem() {
    const payload = {
      "_id": props.product_id
    }
    axios.delete('/api/products/remove', {data: payload}).catch((e) => alert(e));
    props.setUpdate(!props.update);
  }

  // HANDLER FUNCTIONS
  function handlePriceChange(e) {
    setPrice(+e.target.value);
    setPricePending(true);
  }

  function handleSubmitPrice() {
    setPricePending(false);
    updateOneField('price', price);
  }

  function handleStockChange(e) {
    setStock(+e.target.value);
    setStockPending(true);
  }

  function handleSubmitStock() {
    setStockPending(false);
    updateOneField('stock', stock);
  }

  return (
    <tr>
      <td>{props.product_id}</td>
      <td>
        <img src={props.image} alt="psyduck" />
      </td>
      <td>{props.title}</td>
      <td className={styles.noWrap}>
        <input
          type="Number"
          className={
            pricePending
              ? `${styles.textRight} ${styles.pending}`
              : `${styles.textRight}`
          }
          value={price}
          min="0.01"
          step="0.01"
          onChange={(e) => {
            handlePriceChange(e);
          }}
        ></input><span>USD</span>
        <button
          className={styles.btnSave}
          onClick={(e) => handleSubmitPrice(e)}
        >
          Save
        </button>
      </td>
      <td className={styles.noWrap}>
        <input
          className={
            stockPending
              ? `${styles.textRight} ${styles.pending}`
              : `${styles.textRight}`
          }
          value={stock}
          onChange={(e) => {
            handleStockChange(e);
          }}
          type="Number"
          min="0"
        ></input>
        <button
          onClick={(e) => handleSubmitStock(e)}
          className={styles.btnSave}
        >
          Save
        </button>
      </td>
      <td className={styles.textRight}>{props.num_sold}</td>
      <td>
        <button className={styles.btnDelete} onClick={()=> deleteItem()}>delete</button>
      </td>
    </tr>
  );
}

export default AdminItem;

/* =======================================================
In-Source Test
=======================================================*/

// key = {crypto.randomUUID()}
// product_id={arr[i]._id}
// title={arr[i].title}
// price={arr[i].price}
// category={arr[i].category}
// description={arr[i].description}
// image={arr[i].image}
// rating={arr[i].rating}
