import { useEffect, useState } from "react";

const useGetData = (API) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const data = await fetch(API);
    const res = await data.json();
    setData(res.body);
  }, []);
  return data;
};

export default useGetData;
