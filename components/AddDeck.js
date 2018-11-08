import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class AddDeck extends React.Component {
    state = {
        deckName: ''
    }
    render() {
        return (
            <View>
                <Text>AddDeck</Text>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Dock Title"
                    onChangeText={(text) => this.setState({deckName: text})}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.screenProps.addDeck(this.state.deckName)
                    }}
                    >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default createStackNavigator({ AddDeck: AddDeck });
