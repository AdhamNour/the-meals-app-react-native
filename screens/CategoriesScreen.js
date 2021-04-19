import React from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummydata'

const renderGridItem = (ItemData) => <View style={{...styles.gridItem,backgroundColor:ItemData.item.color}}><Text>{ItemData.item.title}</Text></View>

const CategoriesScreen = (props) => {
    return ( <FlatList  data={CATEGORIES} numColumns={2} renderItem={renderGridItem} /> );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex:1,
        margin:15,
        height: 150,
    }
})

export default CategoriesScreen;