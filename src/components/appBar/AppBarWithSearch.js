import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar as statusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Color } from "../../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
const color = Color.colorsBrandCyan;
const AppBarWithSearch = ({ navigation, route }) => {
  return (
    <View style={styles.container} elevation={5}>
      <StatusBar backgroundColor={color} barStyle="dark-content" />
      <Text style={styles.headerTitle}>Supply Haven</Text>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Image
          style={styles.searchIcon}
          source={require("../../images/search.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppBarWithSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: Platform.OS === "android" ? statusBar.currentHeight : 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  headerTitle: {
    marginLeft: 16,
    fontWeight: "bold",
    color: Color.colorsBrandCyan,
    fontSize: 18,
  },
  searchIcon: {
    height: 32,
    width: 32,
    marginRight: 16,
  },
});
