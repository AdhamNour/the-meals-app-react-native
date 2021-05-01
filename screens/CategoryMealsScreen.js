import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummydata";
import Colors from "../Constants/Colors";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((c) => c.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Details Screen"
        onPress={() => props.navigation.navigate({ routeName: "MealDetails" })}
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
