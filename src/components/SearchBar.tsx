import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { ISearch } from "./types";

const SearchBar = ({ term, onTermChange, onTermSubmit }: ISearch) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
