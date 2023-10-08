import { View, Text } from "react-native";
import React from "react";
import EmptyWishlist from "./EmptyWishlist";
import TabContainer from "../../components/general/TabContainer";

const Wishlist = () => {
  const wislistItem = 0;
  return (
    <TabContainer>
      {wislistItem > 0 ? (
        <View>
          <Text>Wishlist</Text>
        </View>
      ) : (
        <EmptyWishlist />
      )}
    </TabContainer>
  );
};

export default Wishlist;
