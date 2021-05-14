import { MEALS } from "../../data/dummydata";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== action.mealId
          ),
        };
      } else {
        return {
          ...state,
          favoriteMeals: [
            ...state.favoriteMeals,
            state.meals.find((meal) => meal.id === action.mealId),
          ],
        };
      }
  }
  return state;
};

export default mealsReducer;
