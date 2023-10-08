import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar as statusBar,
  TouchableOpacity,
} from "react-native";
import {
  Color,
  FontFamily,
  Padding,
  StyleVariable,
  FontSize,
} from "../../../GlobalStyles";
import Button1 from "../../components/general/Button/Button1";
import BackAppBarWithTitle from "../../components/appBar/BackAppBarWithTitle";
import { StatusBar } from "expo-status-bar";

const SignupEmailVerification = () => {
  const [inputValues, setInputValues] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = React.useRef([]);

  // Function to handle text input changes
  const handleInputChange = (text, index) => {
    if (text.length === 1) {
      // Update the value in the array
      const updatedValues = [...inputValues];
      updatedValues[index] = text;
      setInputValues(updatedValues);

      // Move focus to the next input if available
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const handleBackspace = (index) => {
    if (index > 0) {
      // Clear the current input value
      const updatedValues = [...inputValues];
      updatedValues[index] = "";
      setInputValues(updatedValues);

      // Move focus to the previous input if available
      inputRefs.current[index - 1].focus();
    }
    if (index == 0) {
      const updatedValues = [...inputValues];
      updatedValues[index] = "";
      setInputValues(updatedValues);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <BackAppBarWithTitle title={"Verification Code"} />
      <View style={[styles.emailVerification]}>
        <View>
          <View>
            <View style={styles.headlineAndText}>
              <Text style={[styles.emailVerification1]}>
                Email Verification
              </Text>
              <Text style={styles.enterThe6Digit}>
                Enter the 6-digit verification code send to your email address.
              </Text>
            </View>
            <View style={styles.digits}>
              {inputValues.map((value, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.digitLayout1,
                      index !== 0 && { marginLeft: 8 },
                    ]}
                  >
                    <TextInput
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      style={[styles.text, styles.textTypo]}
                      placeholder="0"
                      value={value}
                      onChangeText={(text) => handleInputChange(text, index)}
                      maxLength={1}
                      keyboardType={"phone-pad"}
                      onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === "Backspace") {
                          handleBackspace(index);
                        }
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </View>
          <Text style={[styles.resendCode]}>Resend Code</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Button1 text={"Proceed"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorsBrandWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
  },
  emailVerification: {
    marginTop: 24,
  },
  emailVerification1: {
    fontSize: FontSize.headingHeading2Bold_size,
    lineHeight: 29,
    fontWeight: "700",
    textAlign: "left",
  },
  headlineAndText: {
    width: "100%",
  },
  enterThe6Digit: {
    alignSelf: "stretch",
    color: Color.colorsGreyGrey150,
    marginTop: 8,
    lineHeight: 21,
    letterSpacing: 0.1,
    fontSize: FontSize.buttonsButton2_size,
    textAlign: "left",
  },
  digits: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  digitLayout1: {
    padding: Padding.p_3xs,
    height: 48,
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: Color.colorsGreyGrey50,
    borderStyle: "solid",
    borderRadius: StyleVariable.corners,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: Color.colorsBrandCyan,
    textAlign: "center",
  },
  textTypo: {
    color: Color.colorTomato,
  },
  resendCode: {
    color: Color.colorsBrandCyan,
    textAlign: "center",
    marginTop: 16,
    width: "100%",
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: 0.1,
    fontSize: FontSize.buttonsButton2_size,
  },
  button: {
    marginTop: 24,
  },
});

export default SignupEmailVerification;
