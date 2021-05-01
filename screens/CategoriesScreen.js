import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummydata";
import CategoryGridItemTile from "../components/CategoryGridItemTile";

import Colors from "../Constants/Colors";

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

CategoriesScreen.navigationOptions = {
  title: "Meals Categories",
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
