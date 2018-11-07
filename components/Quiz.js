import React from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

const Quiz = () => (
    <View>
        <Text>Quiz</Text>
        <Text>2/2</Text>
        <Text>Question text</Text>
        <Text>Answer</Text>

        <View>
        <TouchableOpacity
            onPress={() => {
                Alert.alert('You tapped the button!');
            }}
            >
            <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
                Alert.alert('You tapped the button!');
            }}
            >
            <Text>Incorrect</Text>
        </TouchableOpacity>
        </View>
    </View>
)

export default Quiz;