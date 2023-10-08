import { View, Text, StyleSheet, StatusBar as statusBar } from "react-native";
import React from "react";
import AppBarWithSearch from "../../components/appBar/AppBarWithSearch";
import TabContainer from "../../components/general/TabContainer";

const Shop = ({ navigation }) => {
  return (
    // <View style={styles.container}>

    <TabContainer style={styles.shopContainer}>
      <Text>Shop</Text>
    </TabContainer>
    // </View>
  );
};

export default Shop;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
  },
  shopContainer: {
    marginTop: 60,
    width: "100%",
    backgroundColor: "green",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
