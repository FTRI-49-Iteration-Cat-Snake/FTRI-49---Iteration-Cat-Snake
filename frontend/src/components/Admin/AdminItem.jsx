import { useState } from 'react';
import styles from './Admin.module.css';

function AdminItem(props) {
  const [stock, setStock] = useState(props.stock);
  const [price, setPrice] = useState(props.price);

  return (
    <tr>
      <td>{props.product_id}</td>
      <td>
        <img src={props.image} alt="psyduck" />
      </td>
      <td>{props.title}</td>
      <td>
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <button className={styles.btnSave}>Save</button>
      </td>
      <td>
        <input
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
        ></input>
        <button className={styles.btnSave}>Save</button>
      </td>
      <td>{props.num_sold}</td>
      <td>
        <button className={styles.btnDelete}>delete</button>
      </td>
    </tr>
  );
}

export default AdminItem;

// key = {crypto.randomUUID()}
// product_id={arr[i]._id}
// title={arr[i].title}
// price={arr[i].price}
// category={arr[i].category}
// description={arr[i].description}
// image={arr[i].image}
// rating={arr[i].rating}
