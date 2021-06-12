import React from "react";
import ReactDOM from "react-dom";
import "../styles/components/DeleteModal.scss";

const DeleteModal = ({ opened, handleCloseModal, handleDelete, id }) => {
  if (!opened) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal__cover">
      <div className="modal__content">
        <h1>¿Estás seguro que deseas elminar este registro?</h1>
        <div className="modal__content-buttons-container">
          <button onClick={handleCloseModal}>Cancelar</button>
          <button onClick={handleDelete} className="delete_button" id={id}>
            Eliminar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default DeleteModal;
