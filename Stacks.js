import React from "react";
import AuthStack from "./src/stacks/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/stacks/AppStack";
import { useSelector } from "react-redux";

const Stacks = () => {
  // const token = useSelector((state) => state.user.token);
  const token = "123";
  // const token = null;
  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};

export default Stacks;
