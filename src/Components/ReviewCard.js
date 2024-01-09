import React from 'react';
import { Card } from 'react-bootstrap';
import hopeLogo from '../images/hopeLogo.png';
import '../Styles/ReviewCard.css';

const ReviewCard = (props) => {
    return (
        <Card className="single-box mt-4 mx-3">
            <Card.Img className="img-area" src={props.image} alt=""/>
            <Card.Body className="img-text">
              <Card.Title className="img-text-name">{props.name}</Card.Title>
              <Card.Text className="img-text-p"><em>
                "{props.review}"
                </em>
              </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;