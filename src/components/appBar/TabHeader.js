import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar as statusBar,
} from "react-native";
import React from "react";
import { Color } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const TabHeader = ({ title, headerStyle, routeName }) => {
  const navigation = useNavigation();
  let search = routeName === "Home" || routeName === "Shop";
  let searchScreen = routeName === "Shop" ? "ShopSearch" : "ProductSearch";
  return (
    <View style={styles.container} elevation={5}>
      <StatusBar
        backgroundColor={Color.colorsBrandCyan35}
        barStyle="dark-content"
      />
      <Text style={styles.headerTitle}>{title}</Text>
      {search && (
        <TouchableOpacity onPress={() => navigation.navigate(searchScreen)}>
          <Image
            style={styles.searchIcon}
            source={require("../../images/search.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TabHeader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: Platform.OS === "android" ? statusBar.currentHeight : 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    backgroundColor: Color.colorsBrandWhite,
    borderRadius: 5,
  },
  headerTitle: {
    marginLeft: 16,
    fontWeight: "bold",
    color: Color.colorsBrandCyan20,
    fontSize: 18,
  },
  searchIcon: {
    height: 32,
    width: 32,
    marginRight: 16,
  },
});
