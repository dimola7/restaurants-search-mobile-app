import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export const useSearchResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm: string) => {
    try {
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(data.businesses);
    } catch (error) {
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return {
    searchApi,
    results,
    errorMessage,
  };
};
