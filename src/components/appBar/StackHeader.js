import {
  View,
  Text,
  StyleSheet,
  StatusBar as statusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Color } from "../../../GlobalStyles";

const StackHeader = ({ title }) => {
  return (
    <View style={styles.stackHeaderContainer} elevation={5}>
      <TouchableOpacity style={styles.iconWrapper} onPress={handleBack}>
        <Image
          style={styles.backArrow}
          source={require("../../images/arrow.png")}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  stackHeaderContainer: {
    flex: 1,
    position: "absolute",
    top: Platform.OS === "android" ? statusBar.currentHeight : 0,
    alignItems: "center",
    flexDirection: "row",
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
  title: {
    marginLeft: 16,
    fontWeight: "bold",
    color: Color.colorsBrandCyan,
  },
});
