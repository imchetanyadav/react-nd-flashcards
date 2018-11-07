import React from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

const DeckView = () => (
    <View>
        <Text>Deck Title</Text>
        <Text>3 cards</Text>

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