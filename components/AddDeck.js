import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../helpers/styles';

class AddDeck extends React.Component {
    static navigationOptions = {
        title: 'Add Deck',
    };
    state = {
        deckName: ''
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Deck Title"
                    onChangeText={(text) => this.setState({deckName: text})}
                />
                <TouchableOpacity
                    style={styles.button}
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
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeck
