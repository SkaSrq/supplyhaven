import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../../../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

const CyanButton = ({ text, dark = true }) => {
  return (
    <LinearGradient
      colors={[Color.colorsBrandCyan35, Color.colorsBrandCyan20]}
      style={styles.button}
    >
      <Text style={styles.button1}>{text}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button1: {
    fontSize: FontSize.buttonsButton2_size,
    fontWeight: "bold",
    color: Color.colorsBrandButtonText,
    textAlign: "center",
  },
  button: {
    borderRadius: StyleVariable.corners,
    backgroundColor: "",
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CyanButton;
