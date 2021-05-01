import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummydata";

import Colors from "../Constants/Colors";

const CategoriesScreen = (props) => {
  const renderGridItem = (ItemData) => (
    <TouchableOpacity
      style={{ ...styles.gridItem, backgroundColor: ItemData.item.color }}
      onPress={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: ItemData.item.id },
        });
      }}
    >
      <View>
        <Text>{ItemData.item.title}</Text>
      </View>
    </TouchableOpacity>
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
