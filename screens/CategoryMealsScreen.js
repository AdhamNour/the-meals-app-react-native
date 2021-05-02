import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummydata";
import Colors from "../Constants/Colors";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.catgoriesIds.indexOf(catId) !== -1
  );

  const selectedCategory = CATEGORIES.find((c) => c.id === catId);
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catid = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((c) => c.id === catid);
  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
