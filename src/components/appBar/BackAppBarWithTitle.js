import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  Color,
  FontFamily,
  Padding,
  StyleVariable,
  FontSize,
} from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BackAppBarWithTitle = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.appBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.lineIconLayout}
          contentFit="cover"
          source={require("../../images/arrow.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    borderBottomWidth: 1,
    width: "100%",
    height: 56,
    borderColor: Color.colorsGreyGrey50,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    borderBlockEndColor: Color.colorsGreyGrey50,
  },
  lineIconLayout: {
    height: 32,
    width: 32,
  },
  title: {
    marginLeft: 12,
    textAlign: "left",
    color: Color.colorsBrandButton,
    flex: 1,
  },
});

export default BackAppBarWithTitle;
