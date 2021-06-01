import React, { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
const ClientDetail = ({ match }) => {
  const [details, setDetails] = useState("");
  let client = useGetData(
    `https://portal-cesa.vercel.app/api/client/${match.params.id}`
  );

  useEffect(() => {
    if (client[0]) {
      setDetails(JSON.parse(client[0].detail));
    }
  }, [client]);

  return (
    <>
      <h1>Contact</h1>
      {console.log(details)}
      {details.ops &&
        details.ops.map((detail) => {
          return (
            <div>
              <p>{detail.insert}</p>
            </div>
          );
        })}
    </>
  );
};

export default ClientDetail;
