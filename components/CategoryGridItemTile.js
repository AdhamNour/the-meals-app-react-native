import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridItemTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onPress}>
      <View style={{ ...styles.container, backgroundColor: props.item.color }}>
        <Text>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      elevation:3,
      zIndex:3,
  }
});

export default CategoryGridItemTile;
