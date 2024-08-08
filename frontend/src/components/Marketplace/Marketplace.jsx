/**
 * This file represents a marketplace page on our e-commerce website.
 * This page will render nested components such as listed items, navigation bar, and the shopping cart.
 * 
 * @returns - The components to be rendered
 * @exports Marketplace - Function to be used by other files
 */

/* =======================================================
Importing necessary tools
=======================================================*/

// Importing necessary tools
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import Search from './Search.jsx';

import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// Importing CSS file
import './Marketplace.css';


/* =======================================================
Helper functions
=======================================================*/


/* =======================================================
Component
=======================================================*/

// Defines our Marketplace function to be exported
const Marketplace = () => {
    // Creates state array to store Product components
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]); 
    // Function that sends a "GET" request to the DB to fetch product data
    const getComponents = () => {
        axios.get('/api/products')
            .then(res => {
                // Function that changes the state of products array

                const newProducts = res.data.map(product => (
                    <Product
                        key={crypto.randomUUID()} 
                        product_id={product._id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        rating={product.rating}
                    />
                ));
                setAllProducts(newProducts); 
                setDisplayedProducts(newProducts); 
            })
            .catch(e => {
                alert(e);
            });
    };

    // Calls the getComponents function so we can render the products
    useEffect(() => {
        getComponents();
        console.log("hit");
    }, []);

    // Returns a styled div containing the rendered products
    return (
        <div>
            <Search 
                allProducts={allProducts} 
                displayedProducts={displayedProducts} 
                setDisplayedProducts={setDisplayedProducts} 
                getComponents={getComponents} 
                name={'search'}
            />
            <div className="product-display">
                {displayedProducts}
            </div>
        </div>
    );
};

// Exports the Marketplace function
export default Marketplace;


/* =======================================================
In-Source Test
=======================================================*/

if (import.meta.vitest) {
    const { it, expect, describe } = import.meta.vitest

    // Render Dom before each test; Clean up DOM after each test
    beforeEach(() => render(<Router><Marketplace/></Router>));
    afterAll(()=>cleanup())

    it("Market Component Renders", ()=>{
        const market = document.getElementsByName('Marketplace')
        expect(market).not.toBeNull()
    })

    screen.debug()

}