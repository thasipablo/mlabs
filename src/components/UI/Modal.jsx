import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return (
    <Fragment>
      <div className="modal-backdrop" onClick={props.hideModal}>
        <div className="modal-content">{props.children}</div>
      </div>
    </Fragment>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay hideModal={props.hideModal}>{props.children}</Overlay>,
        document.getElementById("portals")
      )}
    </Fragment>
  );
};

export default Modal;
