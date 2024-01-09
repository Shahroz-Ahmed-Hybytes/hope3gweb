import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// import icon from '../../Images/Icon.png';
import basketItem from '../../Data/basketItem';
import '../../Styles/BasketItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { CartState } from '../../Context/Context';
import { quantities } from '../../Data/shop';
import { useCart } from 'react-use-cart';

const BasketItem = ({ item }) => {
    // const {
    //     state: { cart },
    //     dispatch,
    // } = CartState()
    // GET PRICE
    const { updateItemQuantity, removeItem } = useCart();

    return (
        <div className="text-light item">
            <Row lg={5}>
                <Col sm={2} className="px-4 pt-3">

                    <div className="icon">
                        {/* {basketItem.map(img => (
                        <img key={img} id={img.id} src={img.img} alt={img.alt} />
                        )
                      )} */}
                        <img className='mw-100' key={item.id} src={item.image} alt={item.name} />
                    </div>
                </Col>
                <Col sm={3} className="title px-2 pt-2">
                    <div className="">
                        <span>{item.name}</span>
                        <p className="description">{item.description}</p>
                    </div>
                </Col>
                <Col sm={2} className="price px-3 pt-2" >
                    £{+item.price * +item.quantity}
                    {/* <div className="">
                        <span>£{item.itemTotal.toLocaleString()}</span>
                    </div> */}
                </Col>
                <Col sm={2} className="ps-2 pt-2">
                    <select
                        id={item.id}
                        value={item.quantity}
                        className="w-75"
                        onChange={(e) => updateItemQuantity(item.id, e.target.value)}
                    >
                        <option hidden disabled selected>Please Select</option>
                        {quantities.map(item =>
                            <option key={item.id}>{item.name}</option>
                        )}
                    </select>
                    {/* <div className="quantity">
                        <span>Qty: {item.quantity.toLocaleString()}</span>
                    </div> */}
                </Col>
                <Col sm={1} className="pe-1">
                    <Button
                        onClick={() => {
                            // dispatch({
                            //     type: "REMOVE_FROM_CART",
                            //     payload: item,
                            // });
                            removeItem(item.id)
                        }}
                        size="sm"
                        variant="dark"
                        className="delete-button"
                    >
                        <FontAwesomeIcon icon={faX} size="sm" />
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default BasketItem;