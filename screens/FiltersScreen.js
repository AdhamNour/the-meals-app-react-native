import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The FiltersScreen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    title: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            console.log("Hello!");
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
