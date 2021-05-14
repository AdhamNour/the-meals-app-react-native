import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem"

const MealsList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelected={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: { mealTitle: itemData.item.title,mealId: itemData.item.id},
          });
        }}
        duaration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.meals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsList;
