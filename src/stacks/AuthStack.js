import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/authentication/Onboarding";
import SignupScreen from "../screens/authentication/SignupScreen";
import SignupEmailVerification from "../screens/authentication/SignupEmailVerification";
import LoginScreen from "../screens/authentication/LoginScreen";
// import LoginScreen from "./src/Screens/Auth/Login";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="EmailVerification"
        component={SignupEmailVerification}
      />
      <Stack.Screen name="Onboarding1" component={Onboarding} />
      {/* <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
