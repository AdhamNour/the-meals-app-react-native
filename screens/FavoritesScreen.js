import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealsList from "../components/MealList";
import { MEALS } from "../data/dummydata";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <MealsList meals={MEALS} navigation={props.navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    title: "Your Favorites",
    headerLeft:()=> (
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

export default FavoritesScreen;
