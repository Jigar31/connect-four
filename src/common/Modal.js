import React from "react";

function Modal(props) {
  const { closeModal } = props;

  return (
    <div className="modal">
      <div className="modal-background" onClick={() => closeModal()}>
        background
      </div>
      <div className="modal-content">{props.children}</div>
    </div>
  );
}

export default Modal;
