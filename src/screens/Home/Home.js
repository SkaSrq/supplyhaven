import {
  View,
  Text,
  StyleSheet,
  StatusBar as statusBar,
  Platform,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import React, { useEffect, useState } from "react";
import AppBarWithSearch from "../../components/appBar/AppBarWithSearch";
import { Color } from "../../../GlobalStyles";
import TabContainer from "../../components/general/TabContainer";
import Banners from "../../../data/banner";

const width = Dimensions.get("window").width;

const bannerWidth = width - 32;
const Banner = ({ item, index }) => {
  return (
    <View key={item.name} style={styles.bannerWrapper}>
      <View style={styles.bannerContainer}>
        <Image
          contentFit="cover"
          resizeMode="cover"
          style={styles.bannerImage}
          source={{ uri: item.imageURL }}
        />
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    setCurrentIndex((x / width).toFixed(0));
  };
  return (
    <TabContainer>
      <View>
        <FlatList
          data={Banners}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          renderItem={({ item, index }) => {
            return <Banner item={item} index={index} />;
          }}
          onScroll={(e) => {
            handleOnScroll(e);
          }}
        />
      </View>
      <View style={styles.cPaginationWrapper}>
        <View
          style={{
            backgroundColor: Color.colorsBrandWhite,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            paddingHorizontal: 4,
          }}
        >
          {Banners.map((item, index) => {
            return (
              <View
                key={item.name}
                style={[
                  styles.cPagination,
                  {
                    width: currentIndex == index ? 12 : 8,
                    height: currentIndex == index ? 12 : 8,
                    borderRadius: currentIndex == index ? 5 : 4,
                    backgroundColor:
                      currentIndex == index
                        ? Color.colorsBrandCyan
                        : Color.colorsGreyGrey100,
                    marginLeft: 5,
                  },
                ]}
              ></View>
            );
          })}
        </View>
      </View>
    </TabContainer>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
  },
  homeContainer: {
    marginTop: 60,
    marginHorizontal: 8,
    // width: "100%",
  },

  // starts from here
  bannerWrapper: {
    marginTop: 16,
    height: 150,
    width: width,
    paddingHorizontal: 16,
  },
  bannerContainer: {
    height: 150,
    width: bannerWidth,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImage: {
    width: bannerWidth,
    height: 150,
    zIndex: 0,
  },
  paginationDot: {
    // position: "absolute",
    bottom: 16,
    left: 0,
    // right: 0,
    alignItems: "center",
    zIndex: 1,
    // backgroundColor: "green",
  },
  pagination: {
    backgroundColor: Color.colorsBrandWhite,
    borderRadius: 8,
    paddingHorizontal: 5,
  },

  cPaginationWrapper: {
    bottom: 16,
    flexDirection: "row",
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  cPagination: {},
});
