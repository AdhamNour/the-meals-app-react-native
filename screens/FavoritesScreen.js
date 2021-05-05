import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const FavoritesScreen = (props) => {
    return ( <View style = {styles.screen}>
        <Text>
            The FavoritesScreen
        </Text>
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