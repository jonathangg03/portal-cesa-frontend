import axios from "react";

const getData = async (API) => {
  const response = await axios.get(API);
  return response.data;
};

export default getData;
