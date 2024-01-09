import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DataListInput from "react-datalist-input";
import { CartState } from '../Context/Context';
import { Col, Row, Button, Form } from 'react-bootstrap';
import '../Styles/DonateButton.css';



const values = [
    {
        name: '10',
        id: 1
    },
    {
        name: '50',
        id: 2
    },
    {
        name: '100',
        id: 3
    },
    {
        name: '500',
        id: 4
    },
]

const DonateButton = ({ lesson, prices }) => {
    const [item, setItem] = useState("");

    const onSelect = useCallback((selectedItem) => {
        setItem(selectedItem.label);
    }, []);

    const onInputChange = (e) => {
        !isNaN(e) && setItem(e);
    }

    const onClick = () => {
        setItem("");
    }

    const items = useMemo(
        () => values.map((oneItem) => ({
            label: oneItem.name,
            key: oneItem.id
        })), [values]);


    const {
        state: { lessons, cart },
        dispatch,
    } = CartState()

    const checkAddOrUpdate = () => {
        if (cart.length) {
            const selectReducer = cart.filter(l => l.id === lesson.id);
            console.log(selectReducer)
            return selectReducer.length ? "CHANGE_CART_QTY" : "ADD_TO_CART"
        } else {
            return "ADD_TO_CART"
        }
    }

    const getPrice = (lesson) => {
        const price = Array.isArray(prices) && prices.find(price => price.id === lesson['default_price'])
        if (price) {
            return price['unit_amount']
        }
    }

    return (
        // <div className="donate-button">

        // </div>
        <Row lg={6} className="my-5 w-100">
            <Col><img className='w-50' src={`${lesson.images}`} alt={lesson.name} /></Col>
            <Col>
                <b>{lesson.name}</b>
            </Col>
            <Col>{lesson.description}</Col>
            <Col>£{(getPrice(lesson) / 100).toFixed(2)} /unit</Col>
            <Col>
                <DataListInput
                    placeholder="Select option or type amount..."
                    items={items}
                    onSelect={onSelect}
                    onInput={(e) => onInputChange(e)}
                    onClick={onClick}
                    inputClassName="ms-4 p-2 courses-dropdown-input"
                    dropdownClassName="ms-4 p-2 courses-dropdown"
                    itemClassName="ps-3"
                    activeItemClassName="active-item"
                    clearInputOnClick={true}
                />
            </Col>
            <Col>
                <Button
                    onClick={() => {
                        item &&
                            dispatch({
                                type: checkAddOrUpdate(),
                                payload: { ...lesson, quantity: item, itemTotal: (item * lesson.price) },
                            });
                    }}
                    className="courses-donate-button"
                    variant="outline-dark"
                >
                    Add
                </Button>
            </Col>
        </Row>
    );
};

export default DonateButton;

// as={Link} to="/donate"
