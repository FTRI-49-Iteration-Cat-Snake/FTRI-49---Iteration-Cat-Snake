/* =======================================================
Importing necessary tools
=======================================================*/

import React, { useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import './Search.css';

/* =======================================================
Helper functions
=======================================================*/


/* =======================================================
Component
=======================================================*/

function Search({ allProducts, setDisplayedProducts }) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearch(query);

        if (query === '') {
            setDisplayedProducts(allProducts);
            return;
        }

        const results = allProducts.filter(product => 
            product.props.title.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length === 0) {
            console.log('No items matching search.');
        }

        setDisplayedProducts(results);
    };

    return (
        <div>
            <input 
                className='searchbar'
                type='text'
                placeholder='Search Item Here...'
                value={search}
                onChange={handleSearch}
            />
        </div>
    );
}

export default Search;
/* =======================================================
In-Source Test
=======================================================*/


if (import.meta.vitest) {
    const { describe, it, expect, beforeEach, afterEach, vi } = import.meta.vitest

    describle('Search.jsx - confirming elements render', ()=>{
        beforeEach(() =>{
        // const mocksearch = {
        //title ; 'test',
        // }
            render (<Search/>);
    });
        afterEach(()=> cleanup());

        it('has an input field'), ()=>{
            const searchbar = document.querySelector('input[type="search"]');
            expect(searchbar).toBeInTheDocument();
        }

});
}