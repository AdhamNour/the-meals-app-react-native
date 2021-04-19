import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';


const MealsNavigators =  createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals:CategoryMealsScreen,
    MealDetails:MealDetailsScreen
})

export default createAppContainer(MealsNavigators)