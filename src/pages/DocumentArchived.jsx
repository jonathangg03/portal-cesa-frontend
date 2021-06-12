import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import useSendData from "../hooks/useSendData";
import DeleteModal from "../components/DeleteModal";
import "../styles/pages/Document.scss";

const DocumentArchived = () => {
  const [openModal, setOpenModal] = useState(false);
  const document = useGetData("http://localhost:3000/api/document");
  const history = useHistory("");

  const handleArchive = (e) => {
    const archivedEl = document.filter((el) => el.id === e.target.id)[0];
    archivedEl.archived = 0;
    console.log(archivedEl);
    useSendData("http://localhost:3000/api/document", "PUT", archivedEl);
    setTimeout(history.push("/document/archived"), 1000);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = (e) => {
    console.log(e);
    const archivedEl = document.filter((el) => el.id === e.target.id)[0];
    console.log(archivedEl);
    useSendData(
      `http://localhost:3000/api/document/${archivedEl.id}`,
      "DELETE"
    );
    console.log(history);
    setTimeout(location.reload(), 1000);
  };

  return (
    <>
      <section className="document">
        <div className="document__table archived">
          <h4>TITULO</h4>
          <h4>TAMAÑO</h4>
          <h4>SUBIDO</h4>
          <h4>SUBIDO POR</h4>
          <h4>DESARCHIVAR</h4>
          <h4>ELIMINAR</h4>
        </div>
        {document.map((documentItem) => {
          if (documentItem.archived) {
            return (
              <div className="document__table archived" key={documentItem.id}>
                <a href={documentItem.document} target="_blank">
                  {documentItem.name}
                </a>
                <p>{documentItem.size}</p>
                <p>{documentItem.date}</p>
                <p>{documentItem.user}</p>
                <button
                  type="button"
                  onClick={handleArchive}
                  id={documentItem.id}
                >
                  Desarchivar
                </button>
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="delete_button"
                  id={documentItem.id}
                >
                  Eliminar
                </button>
                <DeleteModal
                  id={documentItem.id}
                  opened={openModal}
                  handleCloseModal={handleOpenModal}
                  handleDelete={handleDelete}
                />
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default DocumentArchived;
