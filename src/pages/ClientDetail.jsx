import React, { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const ClientDetail = ({ match }) => {
  const [details, setDetails] = useState("");
  let deltaOps;
  let converter;
  let html;

  let client = useGetData(
    `https://portal-cesa.vercel.app/api/client/${match.params.id}`
  );

  useEffect(() => {
    if (client[0]) {
      setDetails(JSON.parse(client[0].detail));
      deltaOps = client[0].ops;
      const cfg = {};
      converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
      html = converter.convert;
      console.log(html);
    }
  }, [client]);

  return <>{html}</>;
};

export default ClientDetail;
