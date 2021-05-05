import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummydata";
import CategoryGridItemTile from "../components/CategoryGridItemTile";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  const renderGridItem = (ItemData) => (
    <CategoryGridItemTile
      onPress={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: ItemData.item.id },
        });
      }}
      item={ItemData.item}
    />
  );
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    title: "Meals Categories",
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
