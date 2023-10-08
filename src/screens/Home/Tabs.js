import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as statusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Color } from "../../../GlobalStyles";
import BottomNav from "../../components/appBar/BottomNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Shop from "../shop/Shop";
import Wishlist from "../wishlist/Wishlist";
import Cart from "../cart/Cart";
import Profile from "../profile/Profile";
import * as Animatable from "react-native-animatable";
import { getHeaderTitle } from "@react-navigation/elements";
import TabHeader from "../../components/appBar/TabHeader";

const HomeImage = require("../../images/navbar/Home.png");
const ShopImage = require("../../images/navbar/Store.png");
const WishlistImage = require("../../images/navbar/Heart.png");
const CartImage = require("../../images/navbar/Cart.png");
const UserImage = require("../../images/navbar/User.png");

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1.5 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5 }, 1: { scale: 1 } });
    }
  }, [focused]);
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
      <Animatable.View ref={viewRef} duration={800}>
        <Image style={styles.icon} source={item.image} />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const Tab = createBottomTabNavigator();

  // const Tab = () => {
  //   switch (selectedTab) {
  //     // case 1:
  //     //   return <Search />;
  //     // case 2:
  //     //   return <Cart />;
  //     // case 3:
  //     //   return <Wishlist />;
  //     // case 4:
  //     //   return <Profile />;
  //     default:
  //       return <Main />;
  //   }
  // };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <Text>Home</Text>
        <BottomNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> */}
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 16,
            borderRadius: 16,
          },
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <TabHeader
                title={title}
                headerStyle={options.headerStyle}
                navigation={navigation}
                routeName={route.name}
              />
            );
          },
        }}
      >
        {TabArray.map((item, index) => {
          return (
            <Tab.Screen
              key={item.route}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                // tabBarIcon: ({ color, focused }) => (
                //   <Image style={styles.icon} source={item.image} />
                // ),
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.colorsGreyGrey50,
    // width: "100%",
    // height: "100%",
    // paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
    // paddingHorizontal: 10,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 28,
    width: 28,
  },
});
const TabArray = [
  {
    route: "Home",
    label: "Home",
    imageName: "Home.png",
    component: Home,
    image: HomeImage,
  },
  {
    route: "Shop",
    label: "Shop",
    imageName: "Store.png",
    component: Shop,
    image: ShopImage,
  },
  {
    route: "Wishlist",
    label: "Wishlist",
    imageName: "Heart.png",
    component: Wishlist,
    image: WishlistImage,
  },
  {
    route: "Cart",
    label: "Cart",
    imageName: "Cart.png",
    component: Cart,
    image: CartImage,
  },
  {
    route: "Profile",
    label: "User",
    imageName: "User.png",
    component: Profile,
    image: UserImage,
  },
];
