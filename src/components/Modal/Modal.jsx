import React, { createRef, useEffect } from "react";
import styles from "../Modal/Modal.module.css";

const Modal = ({ closeModal }) => {
  const handleKeydown = (e) => {
    console.log(e.code);

    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleClickModal = (e) => {
    console.log(e.target);

    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    console.log(modalRef);
    modalRef.current.addEventListener("click", handleClickModal);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      modalRef.current.removeEventListener("click", handleClickModal);
    };
  }, []);

  const modalRef = createRef();

  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.mainInfo}>
        <h3>Modal</h3>

        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
