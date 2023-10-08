import {
  View,
  Text,
  StatusBar as statusBar,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProductSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigation = useNavigation();
  const handleSearch = () => {
    console.log("handleSearch clicked with keyword " + searchKeyword);
    // TODO: handle search products
  };
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.searchContainer} elevation={5}>
      <TouchableOpacity style={styles.iconWrapper} onPress={handleBack}>
        <Image
          style={styles.backArrow}
          source={require("../../images/arrow.png")}
        />
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchField}
          placeholder="Search for products..."
          value={searchKeyword}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={styles.searchIcon}
            source={require("../../images/search.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductSearch;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    position: "absolute",
    top: Platform.OS === "android" ? statusBar.currentHeight : 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 16,
  },
  backArrow: {
    height: 24,
    width: 24,
  },
  iconWrapper: {
    // width: iconWidth,
    // width: "10%",
    // backgroundColor: "green",
  },
  searchBox: {
    width: "90%",
    flexGrow: 1,
    flexDirection: "row",
    marginLeft: 16,
    // backgroundColor: "blue",
  },
  searchField: {
    width: "100%",
    paddingLeft: 16,
    borderColor: "black",
    borderWidth: 0.2,
    borderRadius: 5,
    height: 32,
  },
  searchIcon: {
    position: "absolute",
    height: 24,
    width: 24,
    right: 5,
    top: 4,
    marginBottom: 0,
  },
});
