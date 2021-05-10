import React from "react";
import { CATEGORIES} from "../data/dummydata";
import MealList from "../components/MealList";

import {useSelector} from 'react-redux'

const CategoryMealsScreen = (props) => {
  
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  
  const displayedMeals = availableMeals.filter(
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
