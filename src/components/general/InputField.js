import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import {
  FontFamily,
  Padding,
  StyleVariable,
  Color,
  FontSize,
} from "../../../GlobalStyles";

const InputField = ({
  label,
  placeholder,
  value,
  setValue,
  compulsory = true,
  secureTextEntry = false,
  error = false,
  errorMessage = "",
  setError,
}) => {
  return (
    <View style={styles.inputField}>
      <Text style={[styles.label, styles.textTypo]}>
        <Text style={styles.labelName}>{label}</Text>
        {compulsory && <Text style={styles.text1}>*</Text>}
      </Text>
      <View
        style={[
          styles.inputFieldInner,
          styles.frameViewSpaceBlock,
          { borderColor: error ? Color.colorTomato : Color.colorsBrandCyan },
        ]}
      >
        <View style={styles.placeholderTextParent}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => {
              setValue(text);
              setError({ error: false });
            }}
            secureTextEntry={secureTextEntry}
            style={[styles.placeholderText, styles.placeholderTypo]}
          />
        </View>
      </View>
      {error ? <Text style={[styles.typo]}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  label: {
    lineHeight: 21,
    letterSpacing: 0.1,
    fontSize: FontSize.bodyBody2Regular_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  textTypo: {
    // fontFamily: FontFamily.bodyBody2Medium,
    fontWeight: "500",
  },
  labelName: {
    color: Color.colorsBrandButton,
  },
  text1: {
    color: Color.colorTomato,
  },
  inputFieldInner: {
    borderWidth: 1,
    borderStyle: "solid",
    paddingTop: Padding.p_base,
    paddingLeft: Padding.p_base,
    height: 60,
    borderRadius: StyleVariable.corners,
  },
  frameViewSpaceBlock: {
    paddingBottom: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingLeft: Padding.p_base,
    height: 60,
    borderRadius: StyleVariable.corners,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
    paddingRight: Padding.p_xs,
    backgroundColor: Color.colorsBrandWhite,
  },
  placeholderTextParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  placeholderText: {
    textAlign: "left",
    color: Color.colorsBrandButton,
    flex: 1,
    fontSize: FontSize.bodyCaptionSemiBold_size,
  },
  placeholderTypo: {
    fontSize: FontSize.bodyCaptionSemiBold_size,
    letterSpacing: 0.1,
  },
  typo: {
    alignSelf: "stretch",
    fontSize: 12,
    color: Color.colorTomato,
    marginLeft: 5,
  },
});

export default InputField;
