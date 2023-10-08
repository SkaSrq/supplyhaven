import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../../../GlobalStyles";
import Button1 from "../../components/general/Button/Button1";
import CyanButton from "../../components/general/Button/CyanButton";

const EmptyCart = () => {
  const handleClick = () => {};
  return (
    <View style={styles.emptyWishlist}>
      <Image
        style={styles.onlineShopping2}
        contentFit="cover"
        source={require("../../images/emptyCart.png")}
      />
      <View style={styles.yourWishlistIsEmpty}>
        <View style={styles.headlineAndText}>
          <Text style={styles.yourWishlistIs}>Your cart is empty</Text>
          <Text style={styles.tapHeartButton}>
            Looks like you have not added anything in your cart. Go ahead and
            explore top categories.
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleClick}>
          <CyanButton text={"Explore Products"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyWishlist: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  onlineShopping2: {
    width: 240,
    height: 240,
  },
  yourWishlistIsEmpty: {
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 16,
  },
  headlineAndText: {
    alignItems: "center",
  },
  yourWishlistIs: {
    fontSize: FontSize.headingHeading2Bold_size,
    lineHeight: 29,
    fontWeight: "700",
    color: Color.colorsBrandButton,
    textAlign: "center",
  },
  tapHeartButton: {
    letterSpacing: 0.1,
    lineHeight: 21,
    color: Color.colorsGreyGrey150,
    fontSize: FontSize.buttonsButton2_size,
    textAlign: "center",
    marginTop: 16,
    height: 42,
  },
  btn: {
    marginTop: 20,
    width: "100%",
  },
});

export default EmptyCart;
