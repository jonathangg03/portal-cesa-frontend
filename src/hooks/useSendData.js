import React from "react";

const useSendData = async (API, method, dataObj, ct) => {
  const fetchOptions = {
    method,
    headers: {
      "Content-Type": ct || "application/json",
    },
    body: JSON.stringify(dataObj),
  };

  const response = await fetch(API, fetchOptions);

  const data = await response.json();
  return data;
};

export default useSendData;
