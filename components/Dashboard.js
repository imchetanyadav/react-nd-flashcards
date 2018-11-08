import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DeckView from './DeckView'

const Dashboard = props => (
    <View>
        <Text>Dashboard</Text>
        {Object.keys(props.screenProps.decks).map(key => (
            <View key={key}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('DeckView', {
                            deck: props.screenProps.decks[key],
                        })
                    }}
                >
                    <Text>{props.screenProps.decks[key].title}</Text>
                    <Text>{props.screenProps.decks[key].questions.length} cards</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
)

export default createStackNavigator(
    {
        Dashboard: Dashboard,
        DeckView: DeckView,
    },
    {
        initialRouteName: 'Dashboard',
    }
);
