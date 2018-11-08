import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class AddDeck extends React.Component {
    static navigationOptions = {
        title: 'Add Deck',
    };
    state = {
        deckName: ''
    }
    render() {
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Dock Title"
                    onChangeText={(text) => this.setState({deckName: text})}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.screenProps.addDeck(this.state.deckName)
                        setTimeout(() => {
                            this.props.navigation.navigate('DeckView', {
                                deckName: this.state.deckName,
                                title: this.props.screenProps.decks[this.state.deckName].title
                            })
                        }, 500)
                    }}
                    >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeck
