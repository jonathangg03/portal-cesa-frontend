import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { FaPen } from "react-icons/fa";
import useGetData from "../hooks/useGetData";
import "../styles/pages/ClientDetail.scss";

const ClientDetail = ({ match }) => {
  const [details, setDetails] = useState("");
  let deltaOps;
  let converter;
  const [html, setHtml] = useState("");

  let client = useGetData(
    `https://portal-cesa.vercel.app/api/client/${match.params.id}`
  );

  useEffect(() => {
    if (client[0]) {
      setDetails(JSON.parse(client[0].detail));
      deltaOps = JSON.parse(client[0].detail);
      const cfg = {
        encodeHtml: true,
      };
      converter = new QuillDeltaToHtmlConverter(deltaOps.ops, cfg);
      setHtml(converter.convert());
    }
  }, [client]);

  return (
    <section className="clientDetail">
      <div className="clientDetail__title">
        <h3>INFORMACIÓN DEL CLIENTE</h3>
      </div>
      <div className="clientDetail__client-container">
        <p>{client[0] && client[0].name}</p>
        <Link to="">
          <FaPen />
          <span>Editar cliente</span>
        </Link>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="clientDetail__item"
      ></div>
    </section>
  );
};

export default ClientDetail;
