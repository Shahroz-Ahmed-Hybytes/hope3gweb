import { Link } from 'react-router-dom';
import React, { forwardRef, useRef } from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import resource from '../Data/additional-resources';
import '../Styles/AdditionalResources.css';

const MailboxToPrint = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {resource.filter(img => img.section === "mailbox-page").map(Img => (
        <div key={Img.id} id={Img.id}>
          <img src={Img.image} alt={Img.alt} className="img-size"/>
        </div>
        )
      )}
    </div>
  );
});

export default function Mailbox() {
  const MailboxRef = useRef();

  return (
    <div className="resources-outer-container">
      <div className="no-bg-inner-container">
        {resource.filter(img => img.id === "blue_go_back").map(Img => (
          <div key={Img.id} id={Img.id} className="back-link">
            <Link to={Img.path}>
              <img src={Img.image} alt={Img.alt} className="img-size"/>
            </Link>
          </div>
          )
        )}

        <ReactToPrint content={() => MailboxRef.current}>
          <MailboxToPrint ref={MailboxRef} />
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div className="btn-container">
                {resource.filter(img => img.id === "print_mailbox_document").map(Img => (
                  <button key={Img.id} id={Img.id} onClick={handlePrint}>
                    <img src={Img.image} alt={Img.alt} className="img-size"/>
                  </button>
                  )
                )}
              </div>
              )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    </div>
  );
};