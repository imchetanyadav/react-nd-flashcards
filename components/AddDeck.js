import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../helpers/styles';

class AddDeck extends React.Component {
    state = {
        deckName: ''
    }
    navigateToDeck = () => { // navigate to deck view after new deck added
        const deckName = this.state.deckName
        this.setState({ deckName: '' })
        this.props.navigation.navigate('DeckView', {
            deckName: deckName,
            title: this.props.screenProps.decks[deckName].title
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.formInput}
                    value={this.state.deckName}
                    placeholder="Deck Title"
                    onChangeText={(text) => this.setState({deckName: text})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.screenProps.addDeck(this.state.deckName, this.navigateToDeck)}
                >
                    <Text style={styles.buttonText}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeck
