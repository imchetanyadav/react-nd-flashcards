import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../helpers/styles';

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }
    cardAdded = () => { // reset input after card added successfuly
        this.setState({ question: '', answer: '' })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.formInput}
                    value={this.state.question}
                    placeholder="Question"
                    onChangeText={(text) => this.setState({question: text})}
                />
                <TextInput
                    style={styles.formInput}
                    value={this.state.answer}
                    placeholder="Answer"
                    onChangeText={(text) => this.setState({answer: text})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.screenProps.addCard(this.props.navigation.state.params.deckName, this.state.question, this.state.answer, this.cardAdded)
                    }}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddCard;