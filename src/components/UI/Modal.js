import React, { Fragment } from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};
const Modeloverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose = {props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<Modeloverlay>{props.children}</Modeloverlay>, portalElement)}
    </Fragment>
  );
}

export default Modal;
