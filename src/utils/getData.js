import axios from "axios";

const getData = async (API) => {
  const response = await axios.get(API);
  return response;
};

export default getData;
