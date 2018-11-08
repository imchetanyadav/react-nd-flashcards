import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DeckView from './DeckView'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Dashboard = props => (
    <View>
        <Text>Dashboard</Text>
        {Object.keys(props.screenProps.decks).map(key => (
            <View key={key}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('DeckView', {
                            deckName: key,
                            title: props.screenProps.decks[key].title
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
        Flashcards: Dashboard,
        DeckView: DeckView,
        AddCard: AddCard,
        Quiz: Quiz,
    },
    {
        initialRouteName: 'Flashcards',
        navigationOptions: ({ navigation }) => ({
            title: (navigation.state.params && navigation.state.params.title ) ? navigation.state.params.title : navigation.state.routeName,
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        })
    }
);
