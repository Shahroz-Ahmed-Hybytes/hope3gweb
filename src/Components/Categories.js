import React from 'react';
import { Col, Row } from 'react-bootstrap';
import donate from '../Data/donate';
// import Group32 from '/Images/Group32.png';
// import Group33 from '/Images/Group33.png';
// import Group34 from '/Images/Group34.png';
// import Group35 from '/Images/Group35.png';

// const images = [Group32, Group33, Group34, Group35];

const Categories = ({ onClick }) => {

    return (
        donate.map((x,i) => {
            return(
                <Col md={3} key={i}>
                  <img 
                      id={x.id}
                      src={x.image}
                      alt={x.alt}
                      onClick={() => onClick(i)}
                  />
                </Col>
            )
        })       
    );
};

export default Categories;