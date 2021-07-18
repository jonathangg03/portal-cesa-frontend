import React from "react";
import { useHistory } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import useSendData from "../hooks/useSendData";
import config from "../config";
import "../styles/pages/Document.scss";

const Document = () => {
  const document = useGetData(`${config.api}/api/document`);
  const history = useHistory("");

  const handleArchive = (e) => {
    const archivedEl = document.filter((el) => el.id === e.target.id)[0];
    archivedEl.archived = 1;
    console.log(archivedEl);
    useSendData(`${config.api}/api/document`, "PUT", archivedEl);
    setTimeout(history.push("/document"), 1000);
  };

  return (
    <>
      <section className="document">
        <div className="document__table">
          <h4>TITULO</h4>
          <h4>TAMAÑO</h4>
          <h4>SUBIDO</h4>
          <h4>SUBIDO POR</h4>
          <h4>ARCHIVAR</h4>
        </div>
        {document.map((documentItem) => {
          if (!documentItem.archived) {
            return (
              <div className="document__table" key={documentItem.id}>
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
                  Archivar
                </button>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default Document;
