import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import Home from './components/Home';

export default class App extends React.Component {
  state = {
    decks: {}
  }
  addDeck = deckName => {
    this.setState( prevState => ({ decks: {
      ...prevState.decks,
      [deckName]: {
        title: deckName,
        questions: []
      }
    }}))
    Alert.alert('Deck Added');

  }
  addCard = (deckName, question, answer) => {
    this.setState( prevState => ({ decks: {
      ...prevState.decks,
      [deckName]: {
        ...prevState.decks[deckName],
        questions: prevState.decks[deckName].questions.concat({ question, answer }),
      }
    }}))
    Alert.alert('Card Added');
  }

  render() {
    return (
      <Home screenProps={{decks: this.state.decks, addDeck: this.addDeck, addCard: this.addCard}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
