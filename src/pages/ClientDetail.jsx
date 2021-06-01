import React, { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
const ClientDetail = ({ match }) => {
  const [details, setDetails] = useState("");
  let client = useGetData(
    `https://portal-cesa.vercel.app/api/client/${match.params.id}`
  );

  useEffect(() => {
    if (client[0]) {
      const newA = client[0].detail.replace("<body>", "");
      const newB = newA.replace("</body>", "");
      var parser = new DOMParser();
      var doc = parser.parseFromString(newB, "text/html");
      setDetails(doc);
      console.log(doc.body);
    }
    // if (client[0]) {
    //   setDetails(JSON.parse(client[0].detail));
    // }
  }, [client]);

  return <>{details}</>;
};

export default ClientDetail;
