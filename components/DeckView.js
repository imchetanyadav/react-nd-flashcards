import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DeckView = props => (
    <View>
        <Text>{props.screenProps.decks[props.navigation.state.params.deckName].title}</Text>
        <Text>{props.screenProps.decks[props.navigation.state.params.deckName].questions.length} cards</Text>

        <View>
        <TouchableOpacity
            onPress={() => { 
                props.navigation.navigate('AddCard', {
                    deckName: props.navigation.state.params.deckName,
                })
            }}
            >
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => { props.navigation.navigate('Quiz') }}
            >
            <Text>Start Quiz</Text>
        </TouchableOpacity>
        </View>
    </View>
)

export default DeckView
