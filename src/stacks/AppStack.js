import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "../screens/Home/Tabs";
import ProductSearch from "../screens/product/ProductSearch";
import ShopSearch from "../screens/shop/ShopSearch";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ProductSearch" component={ProductSearch} />
      <Stack.Screen name="ShopSearch" component={ShopSearch} />
    </Stack.Navigator>
  );
};

export default AppStack;
