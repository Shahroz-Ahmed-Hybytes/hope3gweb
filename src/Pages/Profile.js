import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={3} className="d-flex justify-content-center border rounded">
                    <Row>
                    <Container>
                        <div style={{
                              position: "absolute",
                              background: "#eee",
                              height: "100",
                              width: "100",
                              padding: "40px",
                              borderRadius: "50%"
                        }}>
                        <FontAwesomeIcon icon={faUser} size="6x"/>
                        </div>
                    </Container>
                    </Row>
                    <Row style={{marginTop: "200px"}}>
                        <Col>
                        <ListGroup>
                          <ListGroup.Item className="border-0">Account</ListGroup.Item>
                          <ListGroup.Item className="border-0">Previous Donations</ListGroup.Item>
                          <ListGroup.Item className="border-0">Certificate</ListGroup.Item>
                        </ListGroup>
                        </Col>
                    </Row>
                </Col>
                <Col md={9} className="border rounded">
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;