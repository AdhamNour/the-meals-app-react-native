import React from 'react';
import MealsNavigator from './navigations/MealsNavigator'
import {enableScreens} from 'react-native-screens'

enableScreens();

export default function App() {
  return (
    <MealsNavigator />
  );
}


