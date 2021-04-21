import React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import {CATEGORIES} from '../data/dummydata'

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c => c.id===catId);
    return ( <View style = {styles.screen}>
        <Text>
            The CategoryMealsScreen
        </Text>
        <Text>
            {selectedCategory.title}
        </Text>
    </View> );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;