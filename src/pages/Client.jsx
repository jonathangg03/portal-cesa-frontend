import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import useGetData from "../hooks/useGetData";
import "../styles/pages/Client.scss";

const Client = () => {
  const client = useGetData("https://portal-cesa.vercel.app/api/client");
  const [searchValues, setSearchValues] = useState([]); //Resultados de busqueda
  const [searchInputValue, setSearchInputValue] = useState(""); //Input de busqueda

  useEffect(() => {
    setSearchValues(client);
  }, [client]);

  const handleSearchChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newClient = client.filter((clientItem) => {
      if (
        clientItem.firstName
          .toLowerCase()
          .includes(searchInputValue.toLowerCase()) ||
        clientItem.tag.toLowerCase().includes(searchInputValue.toLowerCase())
      ) {
        return clientItem;
      }
    });

    setSearchValues(newClient);
  };
  return (
    <>
      <Search onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      <section className="client">
        <div className="client__table">
          <h4>Cliente</h4>
          <h4>Detalle</h4>
          <h4>Editar</h4>
        </div>
        {searchValues.map((clientItem) => {
          return (
            <div className="client__table" key={clientItem.id}>
              <p>{clientItem.name}</p>
              <p>
                <Link to={`/client/${clientItem.id}`}>Ver información</Link>
              </p>
              <Link to={`/client/${clientItem.id}/edit`}>
                <FaPen />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Client;
