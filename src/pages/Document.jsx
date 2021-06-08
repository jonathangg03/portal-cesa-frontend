import React from "react";
import Search from "../components/Search";
import useGetData from "../hooks/useGetData";
import "../styles/pages/Document.scss";

const Document = () => {
  const searchValues = [1, 2];
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
        {searchValues.map((documentItem) => {
          return (
            <div className="document__table" key={documentItem}>
              <a>Rol de consultoría</a>
              <p>123456</p>
              <p>06-Jan-2021 11:24 am</p>
              <p>dgarcia@grupocesa.com</p>
              <button type="button">Archivar</button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Document;
