import React, { useEffect, useState } from 'react';
import "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartState } from '../../Context/Context';
import BasketFooter from './BasketFooter';
import BasketItem from './BasketItem';
import CheckoutForm from './CheckoutForm';
import '../../Styles/ShoppingBasket.css';
import { useCart } from 'react-use-cart';
import { shopTableTitles } from '../../Data/shop';
import { Col, Row } from 'react-bootstrap';

const stripePromise = loadStripe('pk_live_51KgthxH4t7VFU3pmqvAIvd5o6iIv46doCk7ryi8qKkj7z1LLYvqcVVYZjhfCpkeigwD5WQ50bCcPxRTR8IRLRFFY00foMHTAnc')
const tableTitles = ["Image", "Name/Description", "Price", "Quantity"]
const ShoppingBasket = () => {
    const [showCheckout, setShowCheckout] = useState(false);
    const { items } = useCart();
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: 'CLIENT_SECRET',
    // };

    // const { state: { cart } } = CartState();

    const handleClickCheckout = () => {
        setShowCheckout(!showCheckout);
        //console.log('test')
    }

    useEffect(() => {
        setShowCheckout(items.length ? true : false)
    }, [items.length])


    return (
        <div className="basket">
            <h4 className="text-light header">My Basket</h4>
            <Row lg={5}>
                {tableTitles.map(title =>
                    <Col key={title}><b>{title}</b></Col>
                )}
            </Row>
            <div className="cart-list">
                {items.map(i => <BasketItem key={i.id} item={i} />)}
            </div>
            <BasketFooter onClick={handleClickCheckout} showCheckout={showCheckout} />
        </div>
    );
};

export default ShoppingBasket;