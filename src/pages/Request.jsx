import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import useGetData from "../hooks/useGetData";
import config from "../config";
import "../styles/pages/Request.scss";

const Request = () => {
  const request = useGetData(`${config.api}/api/request`);
  const [searchValues, setSearchValues] = useState([]); //Resultados de busqueda
  const [searchInputValue, setSearchInputValue] = useState(""); //Input de busqueda

  useEffect(() => {
    setSearchValues(request);
  }, [request]);

  const handleSearchChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newRequests = request.filter((requestItem) => {
      if (
        requestItem.client
          .toLowerCase()
          .includes(searchInputValue.toLowerCase())
      ) {
        return requestItem;
      }
    });

    setSearchValues(newRequests);
  };
  return (
    <>
      <Search onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      <section className="request">
        <div className="request__table">
          <h4>Client</h4>
          <h4>Persona que llamo</h4>
          <h4>Teléfono</h4>
          <h4>Fecha y hora</h4>
          <h4>Contestó</h4>
          <h4>Detalle</h4>
          <h4>Editar</h4>
        </div>
        {searchValues.map((requestItem) => {
          return (
            <div className="request__table" key={requestItem.id}>
              <p>{requestItem.client}</p>
              <p>{requestItem.name}</p>
              <p>{requestItem.phone}</p>
              <p>{requestItem.date}</p>
              <p>{requestItem.attendant}</p>
              <p>{requestItem.detail}</p>
              <Link to={`/request/${requestItem.id}/edit`}>
                <FaPen />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Request;
