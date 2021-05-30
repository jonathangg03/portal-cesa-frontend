import React from "react";
import ReactDOM from "react-dom";
import "../styles/components/DeleteModal.scss";

const DeleteModal = ({ opened, handleCloseModal, handleDelete }) => {
  if (!opened) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal__cover">
      <div className="modal__content">
        <h1>¿Estás seguro que deseas elminar este contacto?</h1>
        <div className="modal__content-buttons-container">
          <button onClick={handleCloseModal}>Cancelar</button>
          <button onClick={handleDelete} className="delete_button">
            Eliminar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default DeleteModal;
