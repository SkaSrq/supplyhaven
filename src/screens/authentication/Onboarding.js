import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar as statusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { Color, FontSize, StyleVariable, Padding } from "../../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import Button1 from "../../components/general/Button/Button1";
import PaginationDot from "react-native-animated-pagination-dot";
import { onboardingStrings } from "../../../helpers/Constants";
import { useNavigation } from "@react-navigation/native";

const Onboarding1 = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const navigation = useNavigation();
  const handleSkipped = () => {
    navigation.navigate("Signup");
  };
  const handleNext = () => {
    if (currentPage === 2) {
      navigation.navigate("Signup");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <SafeAreaView style={styles.onboarding1}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.onboardingWrapper}>
        <View style={styles.onboardingImageWrapper}>
          <View style={styles.logoAndTextLink}>
            <View style={styles.logoAndBrandName}>
              {currentPage > 0 ? (
                <TouchableOpacity onPress={handlePrevious}>
                  <Image
                    style={styles.backIcon}
                    contentFit="cover"
                    source={require("../../images/arrow.png")}
                  />
                </TouchableOpacity>
              ) : (
                <View style={{}}>
                  <Image
                    style={styles.iconImage}
                    contentFit="cover"
                    source={require("../../images/Supply.png")}
                  />
                </View>
              )}

              <Text style={styles.brandName}>Supply Haven</Text>
            </View>
            <TouchableOpacity onPress={handleSkipped}>
              <Text style={styles.skipForNow}>Skip for now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.onboardingImage}>
            <Image
              style={styles.onlineShopping}
              contentFit="cover"
              source={{ uri: onboardingStrings[currentPage].image }}
              // source= {{uri: }}
            />
          </View>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.onboarding1Content}>
            <Text style={styles.exploreAWide}>
              {onboardingStrings[currentPage].title}
            </Text>
            <Text style={styles.exploreAWide1}>
              {onboardingStrings[currentPage].description}
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handleNext}>
              <Button1 text={"Next"} />
            </TouchableOpacity>
          </View>

          <View style={styles.paginationDot}>
            <PaginationDot
              activeDotColor={Color.colorsBrandCyan}
              curPage={currentPage}
              maxPage={3}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  onboarding1: {
    display: "flex",
    backgroundColor: Color.colorsBrandWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
  },
  onboardingWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  onboardingImageWrapper: {
    // marginTop: 10,
    width: "100%",
    display: "flex",
    borderRadius: 32,
    height: 450,
    flexDirection: "column",
    backgroundColor: Color.colorsBrandCyan50,
  },
  logoAndTextLink: {
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logoAndBrandName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconImage: {
    height: 32,
    width: 32,
    objectFit: "cover",
    marginLeft: 10,
    borderRadius: 5,
  },
  backIcon: {
    height: 32,
    width: 32,
    marginLeft: 10,
  },
  brandName: {
    marginLeft: 10,
    fontWeight: "700",
    fontSize: FontSize.headingHeading2Bold_size,
    color: Color.colorsBrandCyan,
  },
  skipForNow: {
    marginRight: 10,
    fontWeight: "500",
    color: Color.colorsBrandCyan,
    fontSize: FontSize.bodyBody2Regular_size,
    lineHeight: 21,
  },
  onboardingImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  onlineShopping: {
    width: 240,
    height: 240,
  },
  bottomBar: {
    position: "absolute",
    bottom: 50,
  },
  onboarding1Content: {
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  exploreAWide: {
    fontSize: FontSize.headingHeading2Bold_size,
    lineHeight: 29,
    fontWeight: "700",
    color: Color.colorsBrandButton,
    width: 284,
    textAlign: "center",
  },
  exploreAWide1: {
    color: Color.colorsGreyGrey150,
    marginTop: 16,
    width: 328,
    textAlign: "center",
    fontSize: FontSize.bodyBody2Regular_size,
    lineHeight: 21,
    letterSpacing: 0.1,
  },
  btn: {
    marginTop: 10,
    width: "100%",
  },
  paginationDot: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding1;
