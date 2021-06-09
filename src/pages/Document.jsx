import React from "react";
import Search from "../components/Search";
import useGetData from "../hooks/useGetData";
import "../styles/pages/Document.scss";

const Document = () => {
  const document = useGetData("http://localhost:3000/api/document");
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
          return (
            <div className="document__table" key={documentItem.id}>
              <a href={documentItem.document} target="_blank">
                {documentItem.name}
              </a>
              <p>{documentItem.size}</p>
              <p>{documentItem.date}</p>
              <p>{documentItem.user}</p>
              <button type="button">Archivar</button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Document;
