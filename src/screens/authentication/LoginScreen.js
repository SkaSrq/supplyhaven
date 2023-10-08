import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar as statusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  FontFamily,
  Padding,
  StyleVariable,
  Color,
  FontSize,
} from "../../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import InputField from "../../components/general/InputField";
import Button1 from "../../components/general/Button/Button1";
import { isValidEmail, isValidPassword } from "../../helpers/validations";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const [emailError, setEmailError] = React.useState({
    error: false,
    message: "",
  });
  const [passwordError, setPasswordError] = React.useState({
    error: false,
    message: "",
  });

  const validate = () => {
    if (email === "" || !isValidEmail(email)) {
      setEmailError({ error: true, message: "Please enter valid email." });
      return false;
    }
    if (password === "" || !isValidPassword(password)) {
      setPasswordError({
        error: true,
        message: "Please enter valid password.",
      });
      return false;
    }
    return true;
  };

  const handleSignupClick = () => {
    if (!validate()) return;
  };
  const redirectToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.signup}>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      <Image
        style={styles.appIcon}
        contentFit="cover"
        source={require("../../images/Supply.png")}
      />
      <View style={styles.signup1}>
        <View style={styles.headline}>
          <Text style={styles.signup2}>Login</Text>
          <View style={[styles.alreadyHaveAnContainer, styles.hintSpaceBlock]}>
            <Text style={styles.alreadyHaveAnAccount}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={redirectToSignup}>
              <Text style={styles.login1}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.inputFields}>
            <InputField
              label={"Email"}
              placeholder={"Enter Email"}
              value={email}
              setValue={setEmail}
              error={emailError.error}
              errorMessage={emailError.message}
              setError={setEmailError}
            />
            <View>
              <InputField
                label={"Password"}
                placeholder={"Enter Password"}
                value={password}
                setValue={setPassword}
                compulsory={true}
                secureTextEntry={!showPassword}
                error={passwordError.error}
                errorMessage={passwordError.message}
                setError={setPasswordError}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Image
                    style={styles.eyeIcon}
                    source={require("../../images/eye.png")}
                    contentFit="cover"
                  />
                ) : (
                  <Image
                    style={styles.eyeIcon}
                    source={require("../../images/eyelashes.png")}
                    contentFit="cover"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.form} onPress={handleSignupClick}>
            <Button1 text={"Login"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signup: {
    width: "100%",
    overflow: "hidden",
    paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
    paddingHorizontal: 20,
    backgroundColor: Color.colorsBrandWhite,
    flex: 1,
  },
  appIcon: {
    marginTop: 20,
    width: 42,
    height: 42,
    borderRadius: 5,
  },
  headline: {
    width: "100%",
    height: 60,
  },

  hintSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  eyeIcon: {
    position: "absolute",
    right: 5,
    bottom: 10,
    height: 24,
    width: 24,
  },

  signup2: {
    fontSize: FontSize.headingHeading2Bold_size,
    lineHeight: 29,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorsBrandButton,
  },
  alreadyHaveAnAccount: {
    color: Color.colorsGreyGrey150,
  },
  login1: {
    marginLeft: 5,
    color: Color.colorsBrandCyan,
  },
  alreadyHaveAnContainer: {
    lineHeight: 21,
    letterSpacing: 0.1,
    fontSize: FontSize.bodyBody2Regular_size,
    textAlign: "left",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
  },
  inputFields: {
    alignSelf: "stretch",
  },
  form: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  signup1: {
    marginTop: 17,
    alignSelf: "stretch",
  },
});

export default SignupScreen;
