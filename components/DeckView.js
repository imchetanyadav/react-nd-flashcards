import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../helpers/styles';

const DeckView = props => (
    <View style={styles.container}>
        <View style={{flexGrow: 1, justifyContent: 'center'}}>
            <Text style={styles.title}>{props.screenProps.decks[props.navigation.state.params.deckName].title}</Text>
            <Text style={styles.subtitle}>{props.screenProps.decks[props.navigation.state.params.deckName].questions.length} cards</Text>
        </View>

        <View>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: 'white'}]}
                onPress={() => { 
                    props.navigation.navigate('AddCard', {
                        deckName: props.navigation.state.params.deckName,
                        title: 'Add Card'
                    })
                }}
            >
                <Text style={[styles.buttonText, {color: 'black'}]}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => { 
                    props.navigation.navigate('Quiz', {
                        deckName: props.navigation.state.params.deckName,
                        title: 'Quiz'
                    })
                }}
            >
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export default DeckView
