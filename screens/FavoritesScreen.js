import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MealsList from '../components/MealList'
import {MEALS} from '../data/dummydata'

const FavoritesScreen = (props) => {
    return ( <View style = {styles.screen}>
        <MealsList meals={MEALS} navigation={props.navigation} />
    </View> );
}

FavoritesScreen.navigationOptions ={
    title: 'Your Favorites'
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;