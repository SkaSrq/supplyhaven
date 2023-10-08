import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color } from "../../../GlobalStyles";
import * as Animatable from "react-native-animatable";
import { useEffect, useRef } from "react";
import Icon from "./Icon";

export default function BottomNav({ selectedTab, setSelectedTab }) {
  const viewRef = useRef(null);
  useEffect(() => {
    if (selectedTab == 0) {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1.5 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5 }, 1: { scale: 1 } });
    }
  }, [selectedTab]);
  const navItems = [1, 2, 3, 4, 5];
  return (
    <View style={styles.navContainer}>
      {navItems.map((item) => {
        return (
          <Icon selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        );
      })}
      {/* <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => setSelectedTab(0)}
      >
        <Animatable.View ref={viewRef} duration={2000}>
          <Image
            style={styles.icon}
            source={require("../../images/navbar/Home.png")}
            contentFit="cover"
          />
        </Animatable.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => setSelectedTab(1)}
      >
        <Animatable.View ref={viewRef} duration={2000}>
          <Image
            style={styles.icon}
            source={require("../../images/navbar/Store.png")}
            contentFit="cover"
          />
        </Animatable.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => setSelectedTab(2)}
      >
        <Animatable.View ref={viewRef} duration={2000}>
          <Image
            style={styles.icon}
            source={require("../../images/navbar/Heart.png")}
            contentFit="cover"
          />
        </Animatable.View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => setSelectedTab(3)}
      >
        <Animatable.View ref={viewRef} duration={2000}>
          <Image
            style={styles.icon}
            source={require("../../images/navbar/Cart.png")}
            contentFit="cover"
          />
        </Animatable.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => setSelectedTab(4)}
      >
        <Animatable.View ref={viewRef} duration={2000}>
          <Image
            style={styles.icon}
            source={require("../../images/navbar/User.png")}
            contentFit="cover"
          />
        </Animatable.View>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    height: 60,
    backgroundColor: Color.colorsBrandWhite,
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    justifyContent: "space-around",
  },
  iconWrapper: {
    height: "100%",
    // width: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "green",
  },
  icon: {
    height: 28,
    width: 28,
  },
  iconName: {
    color: Color.colorsBrandCyan,
    fontWeight: "bold",
  },
});
