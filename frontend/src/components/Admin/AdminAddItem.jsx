/* =======================================================
Importing necessary tools
=======================================================*/

import styles from './Admin.module.css';
import axios from 'axios';
import { useState } from 'react';

import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

/* =======================================================
Helper functions
=======================================================*/



/* =======================================================
Component
=======================================================*/


function AdminAddItem({update, setUpdate}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');


  // 🐛 Only works once per minute due to the way the IDs are generated??
  function addNewItem() {
    const data = {
      title: title,
      price: price,
      category: category,
      description: description,
      image: image,
      stock: stock,
    };
    axios.post('/api/products/add', data).catch((e) => alert(e));

    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
    setStock('');
    setUpdate(!update);
  }

  return (
    <section>
      <h2>Add New Product</h2>

      <form className={styles.addItemForm}>
        <input
          className={styles.span3}
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button className={styles.btnSave} onClick={() => addNewItem()}>
          Add
        </button>
        <textarea
          className={`${styles.span4} ${styles.productDescription}`}
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(+e.target.value);
          }}
        ></input>
        <input
          className={styles.span3}
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        <input
          type="number"
          min="0"
          placeholder="Stock"
          value={stock}
          onChange={(e) => {
            setStock(+e.target.value);
          }}
        ></input>
        <input
          className={styles.span3}
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
      </form>
    </section>
  );
}

export default AdminAddItem;

/* =======================================================
In-Source Test
=======================================================*/