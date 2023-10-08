import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color } from "../../../GlobalStyles";
import * as Animatable from "react-native-animatable";
import { useEffect, useRef } from "react";

const Icon = ({ selectedTab, setSelectedTab }) => {
  const viewRef = useRef(null);
  useEffect(() => {
    console.log("selectedTab: " + selectedTab);
    console.log("viewRef: ", viewRef.current);
    if (selectedTab === 0) {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1.5 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5 }, 1: { scale: 1 } });
    }
  }, [selectedTab]);
  return (
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={() => setSelectedTab(0)}
    >
      <Animatable.View ref={viewRef} duration={2000}>
        <Image
          style={styles.icon}
          source={require("../../images/navbar/Home.png")}
          contentFit="cover"
        />
        {/* <Text style={styles.iconName}>Home</Text> */}
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default Icon;
const styles = StyleSheet.create({
  iconWrapper: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    height: 28,
    width: 28,
  },
});
