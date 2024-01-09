import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import MVideo from './ModalVideo';

const VideoButton = ({ lesson }) => {
    return (
        <div>
            {/* <ButtonGroup className="button-group"> */}
            <div>
                <MVideo lessonName={lesson.name} price={lesson.price}/>
            </div>
            {/* </ButtonGroup> */}
        </div>
    );
};

export default VideoButton;