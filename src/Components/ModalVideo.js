import React,{useEffect, useState} from 'react';
import ModalVideo from 'react-modal-video';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ModalVideo.css';

const MVideo = ({ lessonName, price }) => {
    const [isOpen, setOpen] = useState(false);
    const [home, setHome] = useState(true);

    useEffect(() => {
        if (window.location.href.substring(window.location.href.lastIndexOf("/") + 1) !== ""){
            setHome(false);
        }
    }, [])

    return (
        <>
            <ModalVideo channel='youtube' youtube={{autoplay: 1}} isOpen={isOpen} videoId="Bw85eIE5r_o" onClose={() => setOpen(false)} />
            <Row>
                <Button variant="outline-dark" className={ home ? "course" : "course-donate" } onClick={()=> setOpen(true)}>
                    <Col xs={10}>
                        <span className="course-name">{lessonName}</span>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={faPlay} size="2xl" className="play-icon"/>
                    </Col>
                </Button>
            </Row>
        </>
    );
};

export default MVideo;