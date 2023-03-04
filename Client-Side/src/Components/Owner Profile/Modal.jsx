import React from "react";
import classes from "./Modal.module.css";
function Modal(props) {
  function closeHandler() {
    props.setFormIsVisible(false);
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} on />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
