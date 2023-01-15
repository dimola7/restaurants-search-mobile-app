import { StyleSheet, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useSearchResults } from "../hooks";
import ResultsList from "../components/ResultsList";
import { CATEGORIES } from "../components/constants";

const SearchScreen = ({navigation}: any) => {
  const [term, setTerm] = useState("");
  const { searchApi, results, errorMessage, filterResultsByPrice } =
    useSearchResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        {CATEGORIES?.map((category, index) => (
          <ResultsList
            key={index}
            title={category.title}
            results={filterResultsByPrice(category.price)}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
