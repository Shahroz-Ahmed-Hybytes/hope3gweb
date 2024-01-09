import React, { useState } from 'react';
import '../../Styles/ShoppingBasket.css';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const cardElementOptions = {
    style: {
        base: {
            color: "white",
            fontSize: "18px",
        },
        invalid: {
            color: "#fa755a",
            fontSize: "18px",
        },
        complete: {
            color: "green",
            fontSize: "18px",
        }
    },
    hidePostalCode: true
}

const CheckoutForm = ({ show, onHide }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { items } = useCart();
    // console.log(items)
    const [paymentError, setpaymentError] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!stripe || !elements) {
                console.log("No stripe or elements")
                return;
            }

            const cardElement = elements.getElement(CardElement)

            let itemToBuy = []
            for (let i of items) {
                itemToBuy.push({ price: i.priceId, quantity: +i.quantity })
            }

            if (itemToBuy.length) {
                const attemptPayment = await fetch('http://localhost:5500/create-checkout-session', {
                    method: 'POST',
                    body: JSON.stringify(itemToBuy),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                })
                console.log(attemptPayment)
            }


            const paymentMethod = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
            })

            if (paymentMethod.error) {
                setpaymentError(paymentMethod.error.code)
            }

        } catch (error) {
            console.log(error)
        }



    };

    return (
        // <form onSubmit={handleSubmit} className="pt-5" style={{ color: 'white' }}>
        //     <CardElement options={cardElementOptions} />
        //     {paymentError !== "" && <p style={{ color: "red" }}>{paymentError.slice(0, 4)} {paymentError.slice(5, 13)}</p>}
        //     <Button className="cart-button mt-5" type="submit" disabled={!stripe || !elements} >Pay</Button>
        // </form>

        <form action="/create-checkout-session" method="POST">
            <Button type="submit">
                Checkout
            </Button>
        </form>
    );
};

export default CheckoutForm;