import { createContext, useContext, useEffect, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, lessonReducer } from './Reducers';
import { useState } from 'react';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
    let lessons = []

    useEffect(() => {
        async function fetchData() {
            const fetchProducts = await fetch('http://localhost:5500/products', {
                method: 'GET',
            });
            const productList = await fetchProducts.json();
            lessons = productList
        }
        fetchData();
    }, [])

    const [state, dispatch] = useReducer(cartReducer, {
        lessons: lessons,
        cart: [],
    });

    const [lessonState, lessonDispatch] = useReducer(lessonReducer, {
        quantity: 0
    });

    return (
        <Cart.Provider value={{ state, dispatch, lessonState, lessonDispatch }}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;