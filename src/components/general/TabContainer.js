import { View, Text, StyleSheet, StatusBar as statusBar } from "react-native";
import React from "react";

const TabContainer = ({ children }) => {
  return <View style={styles.tabContainer}>{children}</View>;
};

export default TabContainer;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
    marginTop: 60,
    // marginHorizontal: 8,
  },
});
