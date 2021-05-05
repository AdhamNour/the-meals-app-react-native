import React from "react";
import { CATEGORIES, MEALS } from "../data/dummydata";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.catgoriesIds.indexOf(catId) !== -1
  );

  return (
    <MealList meals={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catid = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((c) => c.id === catid);
  return {
    title: selectedCategory.title,
  };
};



export default CategoryMealsScreen;
