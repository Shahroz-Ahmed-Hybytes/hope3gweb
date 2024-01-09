import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { CartState } from '../../Context/Context';
import form from '../../Data/form';
import '../../Styles/ShoppingBasket.css';

const BasketFooter = ({ onClick, showCheckout }) => {
    // const { state: { cart } } = CartState();

    // const cartTotal = () => {
    //     let total = 0;
    //     cart.map(x => {
    //         return (
    //             total = total + x.itemTotal
    //         )
    //     });
    //     return total.toLocaleString();
    // }

    const { items } = useCart()

    const cartTotal = () => {
        let total = 0;
        for (const item of items) {
            total += item.itemTotal
        }
        return total
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let itemToBuy = []
            for (let i of items) {
                itemToBuy.push({ price: i.priceId, quantity: +i.quantity })
            }

            if (itemToBuy.length) {
                const attemptPayment = await fetch('http://localhost:5000/create-checkout-session', {
                    method: 'POST',
                    body: JSON.stringify(itemToBuy),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                })
                if (attemptPayment.ok) {
                    const response = await attemptPayment.json()
                    window.open(response,"_self")
                }
            }
        } catch (error) {
            console.error(error)
        }

    };

    return (
        <div className="text-light basket-footer pt-3">
            <Row>
                <Col sm={4}>
                    <Button
                        className="cart-button"
                        // disabled={cart.length === 0 ? true : false}
                        onClick={onClick}>
                        Pay with Paypal
                    </Button>
                </Col>
                <Col sm={5} className="cc-button-border">
                    {/* {!showCheckout ?
                        <form action="/create-checkout-session" method="POST">
                            <Button type="submit">
                                Checkout
                            </Button>
                        </form>
                        // <Button
                        //     className="cart-button"
                        //     // disabled={cart.length === 0 ? true : false}
                        //     onClick={onClick}>
                        //     Pay with Credit Card
                        // </Button>
                        :
                        <Button className="cart-button" onClick={onClick}>
                            View Basket
                        </Button>
                    } */}
                    {/* <form onSubmit="http://localhost:5500/create-checkout-session" method="POST">
                        <Button type="submit">
                            Checkout
                        </Button>
                    </form> */}
                    <Button onClick={handleSubmit} disabled={items.length ? false : true}>
                        Checkout
                    </Button>
                </Col>
                <Col sm={3}>
                    <div className="total">
                        <span>Total: £{cartTotal()}</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default BasketFooter;