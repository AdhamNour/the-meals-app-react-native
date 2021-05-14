import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../stores/actions/meals";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector((state) => state.meals.meals);
  const isFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {props.navigation.setParams({isFav: isFav})},[isFav])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.array}>
        {selectedMeal.ingredients.map((item, index) => (
          <Text key={index}>
            {index + 1}) {item}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View style={styles.array}>
        {selectedMeal.steps.map((item, index) => (
          <Text key={index}>
            {index + 1}) {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    title: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName={isFav?"ios-star":"ios-star-outline"} onPress={toggleFav} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  array: {
    alignItems: "center",
  },
});

export default MealDetailsScreen;
