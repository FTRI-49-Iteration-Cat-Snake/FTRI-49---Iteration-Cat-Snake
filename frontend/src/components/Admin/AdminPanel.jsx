/* =======================================================
Importing necessary tools
=======================================================*/


import axios from 'axios';
import styles from './Admin.module.css';
import { useEffect, useState } from 'react';
import AdminItem from './AdminItem';
import AdminAddItem from './AdminAddItem';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

/* =======================================================
Helper functions
=======================================================*/


/* =======================================================
Component
=======================================================*/

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);

  const getComponents = () => {
    // Sends a "GET" request for products stored in db
    axios
      .get('/api/products')
      .then((res) => {
        // Function that changes the state of products array
        setProducts(() => {
          // Saves the current array in newProducts
          const newProducts = [];
          const arr = res.data;
          // Pushes product components to an array passing in data as props
          for (let i = 0; i < arr.length; i++) {
            const newProduct = (
              <AdminItem
                key={crypto.randomUUID()}
                product_id={arr[i]._id}
                title={arr[i].title}
                price={arr[i].price}
                category={arr[i].category}
                description={arr[i].description}
                image={arr[i].image}
                rating={arr[i].rating}
                stock={arr[i].stock}
                num_sold={arr[i].num_sold}
                update={update}
                setUpdate={setUpdate}
              />
            );

            // Pushes each product into allProducts array and displayedProducts arr
            newProducts.push(newProduct);
            // allProducts.push(newProducts);
          }
          return newProducts;
        });
      })
      // Catches any errors during our get request and displays a message box with the error
      .catch((e) => {
        alert(e);
      });
  };

  // Calls the getComponents function so we can render the products
  useEffect(() => {
    getComponents();
  }, [update]);

  return (
    <div className={styles.adminPanel}>
      <AdminAddItem update={update} setUpdate={setUpdate} />
      <div className="admin-header">
        <h2>Inventory</h2>
      </div>

      <table className={styles.adminPanelItems}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Units Sold</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    </div>
  );
}

export default AdminPanel;

/* =======================================================
In-Source Test
=======================================================*/