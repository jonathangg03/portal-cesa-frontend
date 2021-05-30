import React from "react";

const useSendData = async (API, method, dataObj) => {
  const fetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  };

  const response = await fetch(API, fetchOptions);

  const data = await response.json();
  return data;
};

export default useSendData;
