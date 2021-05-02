import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummydata";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  console.log(mealId);
  return (
    <View style={styles.screen}>
      <Text>The MealDetailsScreen</Text>
      <Button title="Go to Cat" onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const mealx = MEALS.find((meal) => meal.id === mealId);
  return {
    title: mealx.title,
    headerRight: ()=> (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Mark as favorite")}
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

export default MealDetailsScreen;
