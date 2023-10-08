import { View, Text } from "react-native";
import React from "react";
import EmptyCart from "./EmptyCart";
import TabContainer from "../../components/general/TabContainer";

const Cart = () => {
  cartItem = 0;
  return (
    <TabContainer>
      {cartItem > 0 ? (
        <View>
          <Text>Cart</Text>
        </View>
      ) : (
        <EmptyCart />
      )}
    </TabContainer>
  );
};

export default Cart;
