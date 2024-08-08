import React from 'react';
import { useState } from 'react'
import * as cartService from '../../services/cartService.js';
import './Popup.css';


/** 
 * This function takes properties passed from a parent and generates
 * a div to display the data
*/
const Product = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const objID = props.product_id;


    // Function that allows users to add an item to their cart
    const addProductToCart = () => {

        // Calls imported function, passing in Object ID
        cartService.add({id: objID})
            .then(() => {  
                alert('Item added to cart!');
            })
    }

    const popupModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    // Returns a product div to be rendered in the marketplace
    return (
        <div className="product-box">

            <h3>
                {props.title}
            </h3>

            <div className="image-container">            
                <img src={props.image}/>
            </div>


            <h4 className='h4'>
                ${props.price} USD
                <button className='button1' onClick={ addProductToCart }>
                    Add to Cart
                </button>
                <button className='details' onClick={popupModal}>
                    More Details Here
                </button>
                {isModalOpen && (
                    <div className='modal active' id='modal'>
                        <div className='modal-header'>
                            <div className='title'>{props.title}</div>
                            <button onClick={closeModal} className='close-button'>&times;</button>
                        </div>
                        <div className='modal-body'>
                            <img className='imgs'src={props.image} alt={props.title} />
                            <p>{props.description}</p>
                        </div>
                    </div>
                )}
                {isModalOpen && <div className='active' id='overlay' onClick={closeModal}></div>}
            </h4>
          
            




        </div>
    )
}

// Exports the Product constructor
export default Product;


/* =======================================================
In-Source Test
=======================================================*/