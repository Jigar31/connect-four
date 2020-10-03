import React from "react";
import "./css/Modal.css";

function Modal(props) {
  const { closeModal } = props;

  return (
    <div className="modal">
      <div className="modal-background" onClick={() => closeModal()}></div>
      <div className="modal-content">{props.children}</div>
    </div>
  );
}

export default Modal;
