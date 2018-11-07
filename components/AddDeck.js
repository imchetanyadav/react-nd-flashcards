import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

class AddDeck extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View>
                <Text>AddDeck</Text>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Dock Title"
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(this.state.text);
                    }}
                    >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeck;