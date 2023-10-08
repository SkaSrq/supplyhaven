import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../../../../GlobalStyles";
import { Image } from "react-native";

const Button1 = ({ text, dark = true }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.button1}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    fontSize: FontSize.buttonsButton2_size,
    fontWeight: "600",
    color: Color.colorsBrandButtonText,
    textAlign: "center",
  },
  button: {
    borderRadius: StyleVariable.corners,
    backgroundColor: Color.colorsBrandButton,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button1;
