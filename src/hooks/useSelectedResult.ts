import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export const useSelectedResult = (id: string) => {
  const [result, setResult] = useState<any>(null);

  const getResult = async (id: string) => {
    const { data } = await yelp.get(`/${id}`);
    setResult(data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return {
    result,
  };
};
