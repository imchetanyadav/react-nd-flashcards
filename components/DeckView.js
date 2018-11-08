import React from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

const DeckView = props => (
    <View>
        <Text>{props.navigation.state.params.deck.title}</Text>
        <Text>{props.navigation.state.params.deck.questions.length} cards</Text>

        <View>
        <TouchableOpacity
            onPress={() => {
                Alert.alert('You tapped the button!');
            }}
            >
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
                Alert.alert('You tapped the button!');
            }}
            >
            <Text>Start Quiz</Text>
        </TouchableOpacity>
        </View>
    </View>
)

export default DeckView;