import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Question"
                    onChangeText={(text) => this.setState({question: text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Answer"
                    onChangeText={(text) => this.setState({answer: text})}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.screenProps.addCard(this.props.navigation.state.params.deckName, this.state.question, this.state.answer)
                    }}
                    >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddCard;