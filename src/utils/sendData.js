import axios from "axios";

const sendData = async (API, method, dataObj, ct) => {
  const fetchOptions = {
    method,
    headers: {
      "Content-Type": ct || "application/json",
    },
    data: JSON.stringify(dataObj),
  };

  const response = await axios(API, fetchOptions);

  return response.data;
};

export default sendData;
