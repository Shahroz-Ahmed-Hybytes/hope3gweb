import React, { useState } from 'react';
import { CartState } from "../Context/Context";
import '../Styles/Donate.css';
import { Col, Container, Row, Button, Table, Form } from 'react-bootstrap';
// import Group32 from '/Images/Group32.png';
// import Group33 from '/Images/Group33.png';
// import Group34 from '/Images/Group34.png';
// import Group35 from '/Images/Group35.png';
import VideoButton from '../Components/VideoButton';
import ShoppingBasket from '../Components/shoppingBasket/ShoppingBasket';
import DonateButton from '../Components/DonateButton';
import Categories from '../Components/Categories';
import { useCart } from 'react-use-cart';

const item = {
  name: "",
  category: 0,
  price: 0,
  quantity: 0
}

const Donate = () => {
  // const { state: {lessons} } = CartState();
  const { addItem, items } = useCart();
  const [selected, setSelected] = useState(0);

  const selectCategory = (x) => {
    setSelected(x);
  }

  return (
    <div className="donate-bg">
      <Row lg={2} className="donate-row1">
        <Col lg={6} className=" col-courses">
          <Row className="mb-4">
            <h5 className="text-light">Find the course right for you!</h5>
          </Row>
          <Row className="mb-4">
            <Categories onClick={selectCategory} />
          </Row>
          <Row>
            {/* <div className="lesson-list-mount">
              <Row className="lesson-list">
                <Col sm={7} className="video-buttons">
                  {items.map((l) => l.category === selected && <VideoButton key={l.id} lesson={l} />)}
                </Col>
                <Col sm={5} className="donate-buttons">
                  {items.map((l) => l.category === selected && <DonateButton key={l.id} lesson={l} />)}
                </Col>
              </Row>
            </div> */}
          </Row>
        </Col>
        <Col lg={6}>
          <ShoppingBasket />
        </Col>
      </Row>
    </div>
  );
};

export default Donate;