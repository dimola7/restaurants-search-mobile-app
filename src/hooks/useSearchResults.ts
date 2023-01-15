import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export const useSearchResults = () => {
  const [results, setResults] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  // search function
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

  // filter categories
  const filterResultsByPrice = (price: string) => {
    return results?.filter(results => {
      return results.price === price
    })
  }

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return {
    searchApi,
    results,
    errorMessage,
    filterResultsByPrice,
  };
};
